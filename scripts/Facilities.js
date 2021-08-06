import { getFacilities } from "./dataAccess.js"

const facilities = getFacilities()



const listFacilities = () => {
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


export const renderFacilities = () => {
    const facilitiesContainer = document.querySelector("#facilitiesContainer")
    facilitiesContainer.innerHTML = listFacilities()
}

document.addEventListener("change",
(event) => {
    if (event.target.name === "governorMenu") {
            renderFacilities()
        }
    }
    )

