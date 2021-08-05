import { addCustomerOrder } from "./dataAccess.js"
import { governors } from "./governors.js"


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

    <article class="governorChoices">
        <section class="choices__governor options">
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Governors</button>
            ${governors()}
           
        </section>
        <section class="choices__sizes options">
            <h2>Sizes</h2>
            
        </section>
        <section class="choices__styles options">
            <h2>Styles</h2>
           
        </section>
    </article>

    <article>
        <section class = "choices__types options">
          
        </section>
    </article>


    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Jewelry Orders</h2>
        
    </article>
`
}








































//     return `
//     <h1>Will You Be Mine? Team Venus</h1>

//     <div class="governorDropdown">
//         <button onclick="" class="dropbtn">Governors</button>
//         <div id="myGovernors" class="dropdown-content">
//         <a href ="">Cameron White</a>
//         <a href ="">Danny Armstrong</a>
//         <a href ="">Keith Parks</a>
//         <a href ="">Steve Brownlee</a>
//         <a href ="">Scott Silver</a>
//         </div>
//     </div>

//     <div class="facilityDropdown">
//         <button onclick=" class="dropbtn">Endor</button>
//         <div id="EndorMinerals" class="dropdown-content">
//         <a href ="">Cameron White</a>
//         <a href ="">Danny Armstrong</a>
//         <a href ="">Keith Parks</a>
//         <a href ="">Steve Brownlee</a>
//         <a href ="">Scott Silver</a>
//         </div>
//     </div>
    
    
//     `