import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "../type";
import { character } from "../initial";
import { ICharacter } from "types/character";

export const actions = {
    getDamage: (state: IInitialState) => {

        if (state.character.currentHealth === 1) {
            state.info = "Вы умерли(";
            state.character = character;
            return;
        }

        if (state.character.currentHealth > 0) {
            state.character.currentHealth--;
        }
    },

    getHill:(state: IInitialState) =>{

        if (state.character.characteristics.health.value == state.character.currentHealth) {
            
            state.info = "Вы полность здоровы";
            return
        }

        state.character.currentHealth++
    },

    setName: (state: IInitialState, action: PayloadAction<string>) => {
        state.character.name = action.payload;
    },

    setCharacter: (state: IInitialState, action: PayloadAction<ICharacter>) => {
        state.character = action.payload;
    }

};
