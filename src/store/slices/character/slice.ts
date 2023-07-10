import { axios } from "utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ICharacter } from "types/character";
import { character } from "./initial";
import { IInitialState } from "./type";
import { skills, calculation, characteristic, actions } from "./reducers";
import { resets } from "./reducers/resets";

const initialState: IInitialState = {
    character: character,
    currentSkill: character.characteristics.strength.skills!.attack,
    info: null,
    error: null,
};

export const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        ...characteristic,
        ...calculation,
        ...actions,
        ...skills,
        ...resets
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCharacter.fulfilled, (state) => {
                state.info = "Персонаж успешно сохранен";
            })
            .addCase(getCharacter.fulfilled, (state, { payload }) => {
                state.character = payload;
                state.info = "Персонаж успешно загружен";
            });
    },
});

export const saveCharacter = createAsyncThunk<
    ICharacter,
    undefined,
    { rejectValue: string }
>("character/saveCharacter", async (_, { getState }) => {
    const {
        character: { character },
    } = getState() as { character: IInitialState };

    const { data } = await axios.post("/characters", character);

    return data;
});

export const getCharacter = createAsyncThunk<
    ICharacter,
    undefined,
    { rejectValue: string }
>("character/getCharacter", async () => {
    const { data } = await axios.get("/characters");

    return data;
});



export const {
    calculateHealth,
    calculateEvasion,
    setName,
    setCharacter,
    calculateEnergy,
    getDamage,
    getHill,
    characteristicUp,
    characteristicDown,
    skillUp,
    setCurrentSkill,
    resetError,
    resetInfo
} = characterSlice.actions;
