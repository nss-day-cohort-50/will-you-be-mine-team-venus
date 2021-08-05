import { getGovernors, setGovernors } from "./dataAccess.js";

const governorsArray = getGovernors()

document.addEventListener("change",
    (event) => {
        if (event.target.name === "governor") {
            setGovernors(parseInt(event.target.value))
        }
    }
)

export const governors = () => {
    let HTML = `<select class='dropdown-menu' name='governorMenu'>
    <option disabled selected value> -- Select your Governor -- </option>`

    for (const governor of governorsArray) {
        if (governor.isActive === true) {
            HTML += `<option name="governor" value="${governor.id}">
            ${governor.name}
            </option>`
        }
    }
    HTML += "</select>"
    return HTML
}