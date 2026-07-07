import { db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

console.log("loaded!!");
async function test() {
  console.log("test");
  const docRef = doc(db, "test", "1");
  await setDoc(docRef, { name: "John Doe" });
}

document.getElementById("hostlobby").addEventListener("click", test);