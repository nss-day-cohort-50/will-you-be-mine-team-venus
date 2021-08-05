export const database = {
    governors: [
        {
            id: 1,
            name: "Cameron White",
            colonyId: 1,
            isActive: true
        },
        {
            id: 2,
            name: "Keith Parks",
            colonyId: 2,
            isActive: true
        },
        {
            id: 3,
            name: "Danny Armstrong",
            colonyId: 3,
            isActive: true
        },
        {
            id: 4,
            name: "Steve Brownlee",
            colonyId: 3,
            isActive: true
        },
        {
            id: 5,
            name: "Scott Silver",
            colonyId: 4,
            isActive: true
        }],
    minerals: [
        {
            id: 1,
            name: "Diamond"
        },
        {
            id: 2,
            name: "Copper"
        },
        {
            id: 3,
            name: "Titanium"
        },
        {
            id: 4,
            name: "Bread"
        },
        {
            id: 5,
            name: "Rice"
        }
    ],
    facilities: [
        {
            id: 1,
            name: "Endor",
            isActive: true
        },
        {
            id: 2,
            name: "Jakku",
            isActive: true
        },
        {
            id: 3,
            name: "Hoth",
            isActive: true
        },
        {
            id: 4,
            name: "Death Star",
            isActive: true
        }
    ],
    colonies: [
        {
            id: 1,
            name: "Mercury"
        },
        {
            id: 2,
            name: "Venus"
        },
        {
            id: 3,
            name: "Earth"
        },
        {
            id: 4,
            name: "Mars"
        },
        {
            id: 5,
            name: "Jupiter"
        },
        {
            id: 6,
            name: "Saturn"
        },
        {
            id: 7,
            name: "Uranus"
        },
        {
            id: 8,
            name: "Neptune"
        }
    ],
    mineralAtFacility: [
        {
            id: 1,
            mineralId: 1,
            facilityId: 1,
            amount: 0
        }],
    availableResources: [
        {
            id: 1,
            colonyId: 1,
            mineralId: 1,
            amountPurchased: 100
        }],
    chosenMinerals: {}
}