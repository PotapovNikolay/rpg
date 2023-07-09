import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "../type";
import { character } from "../initial";
import { ICharacter } from "types/character";

export const actions = {
    getDamage: (state: IInitialState) => {
        const healthPoints = state.character.characteristics.health.value;

        if (healthPoints === 1) {
            state.info = "Вы умерли(";
            state.character = character;
            return;
        }

        if (healthPoints > 0) {
            state.character.characteristics.health.value--;
        }
    },

    setName: (state: IInitialState, action: PayloadAction<string>) => {
        state.character.name = action.payload;
    },

    setCharacter: (state: IInitialState, action: PayloadAction<ICharacter>) => {
        state.character = action.payload;
    },
};
