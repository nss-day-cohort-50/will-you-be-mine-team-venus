import { getFacilities } from "./dataAccess.js"

const facilities = getFacilities()

export const listFacilities = () => {
    let html = "<ul>"

    for (const facility of facilities) {
        if (facility.isActive) {
            html += `
            <li class="facility-button"><button>${facility.name}</button></li>
            `
        }
    }
    html += "</ul>"
    return html
}