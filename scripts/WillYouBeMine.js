import { listAvailableResources } from "./AvailableResources.js"
import { renderFacilities } from "./Facilities.js"
import { governors } from "./governors.js"



// document.addEventListener(
//     "click",
//     (event) => {
//         if (event.target.id === "orderButton") {
//         addCustomerOrder()
//         console.log('button click')
        
//         }
//     }
// )
document.addEventListener("change",
(event) => {
    if (event.target.name === "governorMenu") {
            renderFacilities()
        }
    }
    )


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
            ${listAvailableResources()}
        </section>
    </article>
    `
}