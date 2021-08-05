import { venusExport } from "./beMinePractice.js";

const mainContainer = document.querySelector("#container")

const mainRenderHTML = () => {
    mainContainer.innerHTML= venusExport()
}
mainRenderHTML()