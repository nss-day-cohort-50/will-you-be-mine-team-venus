import { listAvailableResources } from "./Colonies.js"
import { addCustomerOrder } from "./dataAccess.js"
import { governors } from "./governors.js"
import { listFacilities } from "./Facilities.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
        addCustomerOrder()
        console.log('button click')
        
        }
    }
)

export const venusExport=() => {



    return `
    <h1>Will You Be Mine? Team Venus</h1>
    
    <article>
        <section class="facilities">
          ${listFacilities()}
        </section>
    </article>

    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="colonyResources">
        <section class="choices__governor options">
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Governors</button>
            ${governors()}
        </section>
        <section class="resources">
            ${listAvailableResources()}
        </section>
    </article>
    `
}