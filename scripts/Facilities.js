import { getFacilities, setFacility } from "./dataAccess.js"
import { renderFacilityMineralsHTML } from "./FacilityMinerals.js"

const facilities = getFacilities()

document.addEventListener ("click",
    (event) => {
        const itemClicked = event.target.name
        if (itemClicked.startsWith('facility-button')){
            const [,facilityId] = itemClicked.split("__")
            for (const facility of facilities){
                if (facility.id === parseInt(facilityId)){
                        setFacility(parseInt(facilityId))
                        renderFacilityMineralsHTML()
                    }
                }
        }
    }
)

const listFacilities = () => {
    let html = `<ul class="facility-button-list">`

    for (const facility of facilities) {
        if (facility.isActive === true) {
            html += `
            <li><button class="facility-button" name="facility-button__${facility.id}">${facility.name}</button>
            <section id="listResources">
            
            </section>
            </li> 
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

