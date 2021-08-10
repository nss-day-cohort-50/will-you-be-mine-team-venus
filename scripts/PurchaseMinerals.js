import { getAvailableResources, getColonies, getGovernors, getMineralAtFacility, getMinerals, getTransientState } from "./dataAccess.js";

const transientState = getTransientState()
const facilityMinerals = getMineralAtFacility()
const minerals = getMinerals()

const chosenMinerals = transientState.chosenMinerals
const governors = getGovernors()
const colonies = getColonies()
const availableResources = getAvailableResources()

// Add click event for purchase minerals button.
document.addEventListener("click",
    (event) => {
        console.log('button was clicked')
        if(event.target.name === 'orderButton'){
            addCustomerOrder()
            console.log('button was clicked')
        }
    }
)

const getGovernorColony = () => {
    const chosenGovernor = transientState.chosenGovernor
    const foundGovernor = governors.find(
        (governor) => {
            return governor.id === chosenGovernor
        }
    )
    const foundColony = colonies.find(
        (colony) => {
            return colony.id === foundGovernor.colonyId
        }
    )
    return foundColony
}

const subtractFromFacility = () => {
    for (const chosenMineral of chosenMinerals) {
        if (chosenMineral.facilityMineralId > 0) {
            const foundMineralAtFacility = facilityMinerals.find(
                (facilityMineral) => {
                    return facilityMineral.id === chosenMinerals.facilityMineralId
                }
            )
            foundMineralAtFacility.amount -= 1
        }
    }
}

const addToColony = () => {
    const foundColony = getGovernorColony()
    const foundAvailableResources = availableResources.filter(
        (resource) => {
            for (const mineral of minerals) {
                return resource.colonyId === foundColony.id && resource.mineralId === mineral.id
            }
        }
    )
    foundAvailableResources.forEach(
        (resource) => {
            resource.amountPurchased += 1
        }
    )
}

// if(facilityMinerals.mineralId === mineral.id && mineral.id === availableResources.mineralId){

// }
// if statement to see if the mienral Ids are matching

const addCustomerOrder = () => {
    subtractFromFacility()
    addToColony()

    //Reset the temporary state for user choices
    database.transientState.chosenMinerals.forEach(
        (chosenMineral) => {
            chosenMineral.facilityMineralId = 0
        }
    )

    document.dispatchEvent(new CustomEvent("stateChanged"))
}


// transientState: {
//     chosenMinerals: [
//         {
//             facilityId: 1,
//             facilityMineralId: 0,
//         },
//         {
//             facilityId: 2,
//             facilityMineralId: 0
//         },
//         {
//             facilityId: 3,
//             facilityMineralId: 0
//         },
//         {
//             facilityId: 4,
//             facilityMineralId: 0
//         }
//     ],
//     selectedFacility: 0,
//     chosenGovernor: 0
// }

/* Functions
add click event
const subtractfromfacility
const addtocolony
*/

/*
Keep governor and facility selected
Match up governor with colony
Subtract from facility
Add to availableResources in colony

*/

// mineral at Facility
// {
//     id: 1,
//     facilityId: 1,
//     mineralId: 1,
//     amount: 650
// },

// available Resources
// {
//     id: 1,
//     colonyId: 1,
//     mineralId: 1,
//     amountPurchased: 100
// },

// governors
// {
//     id: 1,
//     name: "Cameron White",
//     colonyId: 1,
//     isActive: true
// },