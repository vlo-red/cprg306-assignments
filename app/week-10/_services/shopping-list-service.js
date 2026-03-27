import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// getItems function
export async function getItems(userId) {
  const items = [];

  try {
    const itemsRef = collection(db, "users", userId, "items");

    // Create query 
    const q = query(itemsRef);

    // Fetch documents
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

  } catch (error) {
    console.error("Error getting items:", error);
  }

  return items;
}

// addItem function
export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items");

    // Adding the item
    const docRef = await addDoc(itemsRef, item);

    return docRef.id;

  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}