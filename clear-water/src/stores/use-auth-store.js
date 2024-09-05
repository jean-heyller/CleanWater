import { create } from "zustand";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.config";


const provider = new GoogleAuthProvider();
const useAuthStore = create((set) => ({
    user: null,
    loading: true,
    
    loginGoogleWithPopup: async () => {
        try {
             await signInWithPopup(auth, provider);
            //set({ user: result.user, loading: false });
        } catch (error) {
            console.error(error);
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
