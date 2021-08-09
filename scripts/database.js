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
            isActive: false
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
            name: "Carbon"
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
            facilityId: 1,
            mineralId: 1,
            amount: 650
        },
        {
            id: 2,
            facilityId: 1,
            mineralId: 2,
            amount: 650
        },
        {
            id: 3,
            facilityId: 1,
            mineralId: 3,
            amount: 650
        },
        {
            id: 4,
            facilityId: 1,
            mineralId: 4,
            amount: 650
        },
        {
            id: 5,
            facilityId: 2,
            mineralId: 1,
            amount: 800
        },
        {
            id: 6,
            facilityId: 2,
            mineralId: 2,
            amount: 800
        },
        {
            id: 7,
            facilityId: 2,
            mineralId: 3,
            amount: 800
        },
        {
            id: 8,
            facilityId: 2,
            mineralId: 4,
            amount: 800
        },
        {
            id: 9,
            facilityId: 3,
            mineralId: 1,
            amount: 100
        },
        {
            id: 10,
            facilityId: 3,
            mineralId: 4,
            amount: 100
        },
        {
            id: 11,
            facilityId: 4,
            mineralId: 2,
            amount: 800
        },
        {
            id: 12,
            facilityId: 4,
            mineralId: 3,
            amount: 100
        },
        {
            id: 13,
            facilityId: 4,
            mineralId: 4,
            amount: 100
        }
    ],
    availableResources: [
        {
            id: 1,
            colonyId: 1,
            mineralId: 1,
            amountPurchased: 100
        },
        {
            id: 2,
            colonyId: 1,
            mineralId: 2,
            amountPurchased: 100
        },
        {
            id: 3,
            colonyId: 1,
            mineralId: 3,
            amountPurchased: 100
        },
        {
            id: 4,
            colonyId: 1,
            mineralId: 4,
            amountPurchased: 100
        },
        {
            id: 5,
            colonyId: 2,
            mineralId: 1,
            amountPurchased: 80
        },
        {
            id: 6,
            colonyId: 2,
            mineralId: 2,
            amountPurchased: 80
        },
        {
            id: 7,
            colonyId: 2,
            mineralId: 3,
            amountPurchased: 80
        },
        {
            id: 8,
            colonyId: 2,
            mineralId: 4,
            amountPurchased: 80
        },
        {
            id: 9,
            colonyId: 3,
            mineralId: 1,
            amountPurchased: 90
        },
        {
            id: 10,
            colonyId: 3,
            mineralId: 2,
            amountPurchased: 90
        },
        {
            id: 11,
            colonyId: 3,
            mineralId: 3,
            amountPurchased: 90
        },
        {
            id: 12,
            colonyId: 3,
            mineralId: 4,
            amountPurchased: 90
        },
        {
            id: 13,
            colonyId: 4,
            mineralId: 1,
            amountPurchased: 50
        },
        {
            id: 14,
            colonyId: 4,
            mineralId: 2,
            amountPurchased: 50
        },
        {
            id: 15,
            colonyId: 4,
            mineralId: 3,
            amountPurchased: 50
        },
        {
            id: 16,
            colonyId: 4,
            mineralId: 4,
            amountPurchased: 50
        },
        {
            id: 17,
            colonyId: 5,
            mineralId: 1,
            amountPurchased: 100
        },
        {
            id: 18,
            colonyId: 5,
            mineralId: 2,
            amountPurchased: 100
        },
        {
            id: 19,
            colonyId: 5,
            mineralId: 3,
            amountPurchased: 100
        },
        {
            id: 20,
            colonyId: 5,
            mineralId: 4,
            amountPurchased: 100
        },
        {
            id: 21,
            colonyId: 6,
            mineralId: 1,
            amountPurchased: 100
        },
        {
            id: 22,
            colonyId: 6,
            mineralId: 2,
            amountPurchased: 100
        },
        {
            id: 23,
            colonyId: 6,
            mineralId: 3,
            amountPurchased: 100
        },
        {
            id: 24,
            colonyId: 6,
            mineralId: 4,
            amountPurchased: 100
        },
        {
            id: 25,
            colonyId: 7,
            mineralId: 1,
            amountPurchased: 100
        },
        {
            id: 26,
            colonyId: 7,
            mineralId: 2,
            amountPurchased: 100
        },
        {
            id: 27,
            colonyId: 7,
            mineralId: 3,
            amountPurchased: 100
        },
        {
            id: 28,
            colonyId: 7,
            mineralId: 4,
            amountPurchased: 100
        },
        {
            id: 29,
            colonyId: 8,
            mineralId: 1,
            amountPurchased: 100
        },
        {
            id: 30,
            colonyId: 8,
            mineralId: 2,
            amountPurchased: 100
        },
        {
            id: 31,
            colonyId: 8,
            mineralId: 3,
            amountPurchased: 100
        },
        {
            id: 32,
            colonyId: 8,
            mineralId: 4,
            amountPurchased: 100
        },
],
        transientState: {
            chosenMinerals: [
                {
                    facilityId: 1,
                    facilityMineralId: 0,
                },
                {
                    facilityId: 2,
                    facilityMineralId: 0
                },
                {
                    facilityId: 3,
                    facilityMineralId: 0
                },
                {
                    facilityId: 4,
                    facilityMineralId: 0
                }
            ],
            selectedFacility: 0,
            chosenGovernor: 0
        }
}