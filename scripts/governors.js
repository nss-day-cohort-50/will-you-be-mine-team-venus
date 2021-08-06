import { getGovernors, setGovernors, getTransientState } from "./dataAccess.js";


const transientStateGovernor = getTransientState()
const governorsArray = getGovernors()

document.addEventListener("change",
    (event) => {
        if (event.target.name === "governorMenu") {
            setGovernors(parseInt(event.target.value))
        }
    }
)




export const governors = () => {
    let HTML = `<select class='dropdown-menu' name='governorMenu'>
    <option disabled selected value> -- Select your Governor -- </option>`

    for (const governor of governorsArray) {
        if (governor.isActive === true) {
            if(governor.id === transientStateGovernor.chosenGovernor) {
            HTML += `<option name="governor" value="${governor.id}" selected>
            ${governor.name}
            </option>`
        } else { HTML += `<option name="governor" value="${governor.id}">
        ${governor.name}
        </option>`

        }
        }
    }
    HTML += "</select>"
    return HTML
}