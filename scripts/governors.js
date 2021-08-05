import { getGovernors, setGovernors, getChosenMinerals } from "./dataAccess.js";

const governorsArray = getGovernors()

document.addEventListener("change", 
(event) => {
    if(event.target.name === "governor") {
        setGovernors(parseInt(event.target.value))
    }
}
)

export const governors = () => {
    const orderBuilder = getChosenMinerals()
    let HTML ="<select class='dropdown-menu'>"

    for (const governor of governorsArray) {
            HTML += `<option name="governor" value="${governor.id}">
            ${governor.name}
            </option>`
        
    }
    HTML += "</select>"
    return HTML
}   