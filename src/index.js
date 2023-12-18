import "../style.css"
import IMG_js from "../assets/Котик_Мурлыка.png"

const h1 = document.createElement("h1")
h1.textContent = "I love JavaScript"
document.body.append(h1)
const img = document.createElement("img")
img.src = IMG_js
h1.insertAdjacentElement("afterend", img)