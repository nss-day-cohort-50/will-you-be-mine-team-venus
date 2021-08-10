import { governors } from "./governors.js"
import { listAvailableResources } from "./AvailableResources.js"
import { listFacilities } from "./Facilities.js"
import { renderSections } from "./FacilityMinerals.js"
import { chosenMineralsList } from "./ChosenMinerals.js"
import { addCustomerOrder } from "./PurchaseMinerals.js"

document.addEventListener("click",
    (event) => {
        if (event.target.name === 'orderButton') {
            addCustomerOrder()
            console.log('button was clicked')
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const venusExport = () => {

    return `
    <h1>Will You Be Mine? Team Venus</h1>
    
    <article>
        <section id="facilitiesContainer" class="facilities">
            ${listFacilities()}
            <section class="list-of-minerals">
                ${renderSections()}</section>
        </section>
    </article>

    <article>
        <section class="chosen-minerals">
            ${chosenMineralsList()}
        </section>
        <button id="orderButton" name="orderButton">Purchase Minerals</button>
    </article>

    <article class="colonyResources">
        <section class="choices__governor options">
            <b>Governors:</b>
            ${governors()}
        </section>
        <section id="availableResources">
            ${listAvailableResources()}
        </section>
    </article>
    `
}