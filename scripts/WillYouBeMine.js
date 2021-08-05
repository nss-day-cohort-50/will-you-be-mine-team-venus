import { listAvailableResources } from "./Colonies.js"
import { addCustomerOrder } from "./dataAccess.js"
import { governors } from "./governors.js"
import { listFacilities } from "./Facilities.js"


// document.addEventListener(
//     "click",
//     (event) => {
//         if (event.target.id === "orderButton") {
//         addCustomerOrder()
//         console.log('button click')
        
//         }
//     }
// )

export const venusExport=() => {



    return `
    <h1>Will You Be Mine? Team Venus</h1>
    
    <article>
        <section id="facilitiesContainer" class="facilities">
        </section>
    </article>

    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="colonyResources">
        <section class="choices__governor options">
        Governors:
            ${governors()}
        </section>
        <section id="availableResources">

        </section>
    </article>
    `
}