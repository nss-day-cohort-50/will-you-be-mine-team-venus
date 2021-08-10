import { getFacilities, getTransientState, setFacility } from "./dataAccess.js"

const facilities = getFacilities()
const transientState = getTransientState()

document.addEventListener("click",
    (event) => {
        const itemClicked = event.target.name
        if (itemClicked.startsWith('facility-button')) {
            const [, facilityId] = itemClicked.split("__")
            for (const facility of facilities) {
                if (facility.id === parseInt(facilityId)) {
                    setFacility(parseInt(facilityId))
                }
                setBackground()
            }
        }
    }
)

export const setBackground = () => {
    if (transientState.selectedFacility === 1) {
        const container = document.querySelector('#facilitiesContainer')
        container.style.background = "url('images/endor.jpg')";
        container.style.backgroundSize = "contain"
        let title = document.querySelector('#select_facility')
        title.innerHTML = 'Endor';

    }
    if (transientState.selectedFacility === 2) {
        const container = document.querySelector('#facilitiesContainer')
        container.style.background = "url('images/Jakku.jpeg')";
        container.style.backgroundSize = "cover"
        let title = document.querySelector('#select_facility')
        title.innerHTML = 'Jakku';
    }
    if (transientState.selectedFacility === 3) {
        const container = document.querySelector('#facilitiesContainer')
        container.style.background = "url('images/Hoth.jpg')";
        container.style.backgroundSize = "cover"
        let title = document.querySelector('#select_facility')
        title.innerHTML = 'Hoth';
    }
    if (transientState.selectedFacility === 4) {
        const container = document.querySelector('#facilitiesContainer')
        container.style.background = "url('images/Death Star.jpg')";
        container.style.backgroundSize = "cover"
        let title = document.querySelector('#select_facility')
        title.innerHTML = 'Death Star';
    }
}

export const listFacilities = () => {
    if (transientState.chosenGovernor > 0) {
        let html = `<h2 class="select_facility" id="select_facility">Select Facility</h2>`

        html += `<ul class="facility-button-list">`

        for (const facility of facilities) {
            if (facility.isActive === true) {
                html += `
                <li><button class="facility-button__${facility.id}" name="facility-button__${facility.id}">${facility.name}</button></li>`
            }
        }

        html += "</ul>"

        return html
    } else {
        return '<h2 class="select-governor">Select Your Governor</h2>'
    }
}