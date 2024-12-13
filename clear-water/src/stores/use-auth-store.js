import { create } from "zustand";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.config";

import UserDao from "../daos/UserDao";

const provider = new GoogleAuthProvider();
const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  loginGoogleWithPopup: async () => {
    console.log("Login with Google");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;


      const userExists = await UserDao.checkUserInDB(user.email);

      if (!userExists) {
        return false;
      } else {
        set({ user: user.email, loading: false });
        return true;
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
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },

  loginWithForm: async (form) => {
    const { success, data } = await UserDao.checkFormLogin(form);

    console.log("Login with form", success, data);

    if (success) {
      set({ user: data, loading: false });
      return true;
    } else {
      return false;
    }
  },

  registerWithForm: async ({ email, name, password }) => {
    const newUser = {
      email: email,
      name: name,
      password: password,
    };
    const userExists = await UserDao.createUser(newUser);
    if (userExists) {
      return false;
    } else {
      set({ user: {email: email, name: name}, loading: false });
      return true;
    }
  },

  logout: async () => {
    try {
      await auth.signOut();
      set({ user: null, loading: false });
    } catch (error) {
      set({ loading: false });
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
