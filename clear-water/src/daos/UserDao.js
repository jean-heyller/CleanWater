import { collection, getDoc, addDoc, deleteDoc, setDoc, query, where,getDocs } from "firebase/firestore";
import db from "../../firebase.config";

class UserDao {
    constructor() {
        this.collectionRef = collection(db, "users");
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

    async createUser(user) {
        const q = query(this.collectionRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            await addDoc(this.collectionRef, user);
            console.log("User added to Firestore");
            return false; // Usuario no existía y fue agregado
        } else {
            console.log("User already exists in Firestore");
            return true; // Usuario ya existía
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
    }

}
export default new UserDao();