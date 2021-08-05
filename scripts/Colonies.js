import { getAvailableResources, getChosenGovernor, getColonies, getGovernors, getMineralAtFacility, getMinerals} from "./dataAccess.js";


const governorsArray = getGovernors()
const colonies = getColonies()
const availableResources = getAvailableResources()
const mineralsAtFacility = getMineralAtFacility()
const minerals = getMinerals()
const getGovernor= getChosenGovernor()

export const listAvailableResources = () => {
    let html = `<ul>`

    const foundColony = colonies.find(
      (colony) => {
          for (const governor of governorsArray) {
              return colony.id === governor.colonyId
              
          }
      }  
    )


    const foundResources = availableResources.find(
        (resource) => {
            if (resource.colonyId === foundColony.id) {
                return resource
            }
        }
    )

    const foundFacilityMinerals = mineralsAtFacility.find (
        (facilityMineral) => {
            if(foundResources.mineralId === facilityMineral.id) {
                return facilityMineral
            }
        }
    )

    const mineralName = minerals.find(
        (mineral) => {
            if(foundFacilityMinerals.mineralId === mineral.id) {
                return mineral
            }
        }
    )

    html += `<li> ${mineralName.name} </li>`

    html += `</ul>`
    return html

}























    // for (const governor of governorsArray) {
    //     for (const colony of colonies) {
    //         if(getGovernor.id === colony.id){
    //         if (governor.colonyId === colony.id) {
    //             for (const resource of availableResources)
    //                 if (resource.colonyId === colony.id) {
    //                     for (const mineralAtFacility of mineralsAtFacility)
    //                         if (resource.mineralId === mineralAtFacility.mineralId) {
    //                             for (const mineral of minerals) {
    //                                 if (mineralAtFacility.mineralId === mineral.id) {
    //                                     html += `
    //                                         <li>
    //                                         ${mineral.name}: ${mineralAtFacility.amount}
    //                                         </li>
    //                                     `
    //                                 }
    //                             }
    //                         }
    //                 }
    //         }
    //     }
    //   }  }
