import { db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

console.log("loaded!!");
async function test() {
    console.log("test");
    const docRef = doc(db, "test", "1");
    await setDoc(docRef, { name: "John Doe" });
}

function animateButton(button) {
    var style = window.getComputedStyle(button);
    console.log(screen.width);
    var margin = parseInt(style.getPropertyValue("margin-left"));
    console.log(margin);
    console.log(style.getPropertyValue("box-sizing"));
    button.style.width = window.innerWidth - margin*2 + "px";
    button.style.height = "100px";
    button.style.color = "rgba(244, 255, 194, 0)";
}

document.getElementById("hostlobby").addEventListener("click", () => {
    animateButton(document.getElementById("hostlobby"));
    document.getElementById("joinlobby").hidden = true;
    document.getElementById("hostlobbybr").hidden = true;
    test();
});


document.getElementById("hostlobby").addEventListener("transitionend", (event) => {
    if (event.propertyName !== "width") return;

    var promptdiv = document.getElementById("promptdiv");
    var btnstyle = window.getComputedStyle(event.target);

    promptdiv.style.width = btnstyle.getPropertyValue("width");
    promptdiv.style.height = btnstyle.getPropertyValue("height");
    promptdiv.style.padding = btnstyle.getPropertyValue("padding");
    promptdiv.style.display = "inline-block";
    event.target.hidden = true;
    promptdiv.hidden = false;
    
});

document.getElementById("joinlobby").addEventListener("click", () => {
    document.getElementById("hostlobby").hidden = true;
    document.getElementById("hostlobbybr").hidden = true;
    animateButton(document.getElementById("joinlobby"));
    
});

document.getElementById("joinlobby").addEventListener("transitionend", (event) => {
    if (event.propertyName !== "width") return;

    var promptdiv = document.getElementById("promptdiv");
    var btnstyle = window.getComputedStyle(event.target);

    promptdiv.style.width = btnstyle.getPropertyValue("width");
    promptdiv.style.height = btnstyle.getPropertyValue("height");
    promptdiv.style.padding = btnstyle.getPropertyValue("padding");
    promptdiv.style.display = "inline-block";
    event.target.hidden = true;
    promptdiv.hidden = false;

});

