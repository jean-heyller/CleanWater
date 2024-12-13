import { collection, getDoc, addDoc, deleteDoc, setDoc, query, where, getDocs, doc } from "firebase/firestore";
import CryptoJS from "crypto-js";
import db from "../../firebase.config";

class UserDao {
    constructor() {
        this.collectionRef = collection(db, "users");
        this.rewardsCollectionRef = collection(db, "Recompensas");
        this.scoresCollectionRef = collection(db, "scores");
        this.quizzesCollectionRef = collection(db, "quices");
    }

    async getUserById(id) {
        await getDoc(doc(this.collectionRef, id))
            .then((userDoc) => {
                if (userDoc.exists()) {
                    return { sucess: true, data: userDoc.data() };
                } else {
                    console.log("No such document!");
                    return { sucess: false, data: null };
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
                return { sucess: false, data: null };
            });
    }

    async checkUserInDB(email) {
        const q = query(this.collectionRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        console.log("Checking user in Firestore", querySnapshot);
        if (querySnapshot.empty) {
            console.log("User does not exist in Firestore");
            return false; // Usuario no existe
        } else {
            console.log("User already exists in Firestore");
            return true; // Usuario ya existe
        }
    }

    async checkFormLogin({ email, password }) {
        password = CryptoJS.SHA256(password).toString();
        const q = query(this.collectionRef, 
            where("email", "==", email),
            where("password", "==", password)
        );
        const querySnapshot = await getDocs(q);

        console.log("Checking user in Firestore", querySnapshot);
        if (querySnapshot.empty) {
            console.log("User does not exist or password does not match");
            return { success: false, data: null }; // Usuario no existe o contraseña no coincide
        } else {
            const userData = querySnapshot.docs[0].data();
            console.log("User found in Firestore", userData);
            return { success: true, data: userData }; // Retorna la información del usuario
        }
    }

    async createUser(user) {
        const q = query(this.collectionRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            if (user.password){
                user.password = CryptoJS.SHA256(user.password).toString();
            }
            await addDoc(this.collectionRef, user);
            console.log("User added to Firestore");
            return false; 
        } else {
            console.log("User already exists in Firestore");
            return true;
        }
    }

    async updateUser(id, user) {
        await setDoc(doc(this.collectionRef, id), user)
            .then(() => {
                console.log("Document successfully updated!");
                return { sucess: true };
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
                return { sucess: false };
            });
    }

    async deleteUser(id) {
        await deleteDoc(doc(this.collectionRef, id))
            .then(() => {
                console.log("Document successfully deleted!");
                return { sucess: true };
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
                return { sucess: false };
            });
    };


    async getAllRewards() {
        try {
            const querySnapshot = await getDocs(this.rewardsCollectionRef);
            const rewards = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return { success: true, data: rewards };
        } catch (error) {
            console.error("Error getting rewards: ", error);
            return { success: false, data: null };
        }
    }


    async getAllScores() {
        try {
            const querySnapshot = await getDocs(this.scoresCollectionRef);
            const scores = querySnapshot.docs.map(doc => ({
                ...doc.data()
            }));
            return { success: true, data: scores };
        }

        catch (error) {
            console.error("Error getting scores: ", error);
            return { success: false, data: null };
        }

        finally {
            console.log("Finally");
        }

    };


    async addScore(score) {
        try {
            // verifico si el usuario ya tiene una puntuación
            const q = query(this.scoresCollectionRef, where("email", "==", score.email));
            const querySnapshot = await getDocs(q);
            // si ya tiene una puntuación, la actualizo
            if (!querySnapshot.empty) {
                const docId = querySnapshot.docs[0].id;
                await setDoc(doc(this.scoresCollectionRef, docId), score);
            } else {
                // si no tiene una puntuación, la agrego
                await addDoc(this.scoresCollectionRef, score);
            }
            return { success: true };
        } catch (error) {
            console.error("Error adding score: ", error);
            return { success: false };
        }
    }



    async saveQuizState(quizState) {
        try {
            // Verifico si el usuario ya tiene un estado de quiz guardado
            const q = query(this.quizzesCollectionRef, where("email", "==", quizState.email));
            const querySnapshot = await getDocs(q);
            // Si ya tiene un estado de quiz, lo actualizo
            if (!querySnapshot.empty) {
                const docId = querySnapshot.docs[0].id;
                await setDoc(doc(this.quizzesCollectionRef, docId), quizState);
            } else {
                // Si no tiene un estado de quiz, lo agrego
                await addDoc(this.quizzesCollectionRef, quizState);
            }
            return { success: true };
        } catch (error) {
            console.error("Error saving quiz state: ", error);
            return { success: false };
        }
    }

    


   

}
export default new UserDao();