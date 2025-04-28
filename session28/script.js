//------------------------------------ task1
const hidden = document.getElementById("hidden-message");
hidden.style.display = "inline";

function revealMessage() {
    const message = hidden.textContent;
    const reversed = message.split("").reverse().join("");

    document.getElementById("decoded-message").textContent = reversed;
}

//------------------------------------ task2

const documents = document.getElementsByClassName("classified");
for (const doc of documents) {
    const securityLevel = doc.getAttribute("data-security");
    if(securityLevel  === "high"){
        doc.style.backgroundColor = "red";
        doc.addEventListener("click", () => {doc.textContent = "mananas"});
    }else if(securityLevel  === "medium"){
        doc.style.backgroundColor = "yellow";
        doc.addEventListener("click", () => {doc.textContent = "uyvars"})
    }else{
        doc.style.backgroundColor = "green";
        doc.addEventListener("click", () => {doc.textContent = "petre"})
    }
}





