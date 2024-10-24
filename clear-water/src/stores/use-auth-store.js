import { create } from "zustand";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.config";

import UserDao from "../daos/UserDao";

const provider = new GoogleAuthProvider();
const useAuthStore = create((set) => ({
    user: null,
    loading: true,

    loginGoogleWithPopup: async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userExists = await UserDao.checkUserInDB(user.email);

            if (!userExists) {
                return false
            } else {
                return true
            }

        } catch (error) {
            console.error(error);
            set({ loading: false });
        }
    },

    clearState: () => set({ user: null }),

    registerGoogleWithPopup: async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userExists = await UserDao.checkUserInDB(user.email);
            
            if (!userExists) {
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                };
                await UserDao.createUser(newUser);
                set({ user, loading: false });
                return false
            }else{
                return true
            }
        } catch (error) {
            console.error(error);
            set({ loading: false });
        }
    },

    logout: async () => {
        try {
            await auth.signOut();
            set({ user: null, loading: false });
        } catch (error) {
            console.error(error);
        }
    },

    observeAuthState: () => {
        auth.onAuthStateChanged((user) => {
            set({ user, loading: false });
        });
    },
}));

export default useAuthStore;