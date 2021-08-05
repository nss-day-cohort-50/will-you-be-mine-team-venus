import { getFacilities } from "./dataAccess.js"

const facilities = getFacilities()

export const listFacilities = () => {
    let html = `<ul class="facility-button-list">`

    for (const facility of facilities) {
        if(facility.isActive === true) {
        html += `
            <li><button class="facility-button">${facility.name}</button></li> 
            ` 
        }
    }

    html += "</ul>"
    return html
}