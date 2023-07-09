import { IInitialState } from "../type";


export const calculation ={

    calculateHealth: (state: IInitialState) => {

            // if (state.character.characteristics.health.value<3) {
            //     state.character.characteristics.health.value = state.character.characteristics.health.value + state.character.characteristics.strength.value
            // }
            // else{
                state.character.characteristics.health.value =
                state.character.characteristics.strength.value + 3;
            // }
        },

        calculateEvasion: (state: IInitialState) => {
            state.character.characteristics.evasion.value =
                state.character.characteristics.agility.value + 10;
        },

        calculateEnergy: (state: IInitialState) => {
            state.character.characteristics.energy.value =
                state.character.characteristics.agility.value +
                state.character.characteristics.intelligence.value;
        },
}