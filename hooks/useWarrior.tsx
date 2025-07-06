import { create } from "zustand"

export const Warrior = {
    warriorH: {
        sexe: "male",
        name: "Jose",
    },
    warriorF: {
        sexe: "female",
        name: "Melissa"
    }
}

export const useWarrior = create((set) => ({
    props: [
        {
            id: 0,
            name: "hat",
        },
        {
            id: 1,
            name: "gloves",
        },
        {
            id: 2,
            name: "armor",
        },
    ]
}))