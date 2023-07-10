import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "../type";

export const characteristic = {
    characteristicUp: (state: IInitialState, action: PayloadAction<string>) => {
        state.character.characteristics[action.payload].value += 1;
    },

    characteristicDown: (
        state: IInitialState,
        action: PayloadAction<string>
    ) => {
        if (state.character.characteristics[action.payload].value == 0) {
            state.error = "Значение не может быть меньше нуля";
            return;
        }

        if (
            state.character.characteristics[action.payload].value ==
            state.currentSkill.level
        ) {
            state.info =
                "нельзя уменьшить параметр, потому что вы прокачали ветку скила";
            return;
        }

        state.character.characteristics[action.payload].value -= 1;
    },
};
