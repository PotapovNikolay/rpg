import { ICharacter, ISkill, Skills } from "types/character"
import { character } from "./initial"
import {  PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axios } from "utils/axios";

function getKeyByValue<T extends {[index: string]: string}>(enumObject: T, value: string): keyof T|null  {

  const keys = Object.keys(enumObject) as Array<keyof T>;
  for (const key of keys) {
    if (enumObject[key] === value) {
      return key;
    }
  }
  return null
}

interface IInitialState{
    character: ICharacter,
    currentSkill: ISkill,
    info:string | null,
    error: string | null,
}

const initialState:IInitialState = {
    character: character,
    currentSkill: character.characteristics.strength.skills!.attack,
    info:null,
    error:null,
}

export const saveCharacter = createAsyncThunk<
    ICharacter,
    undefined,
    { rejectValue: string }>
    ("character/saveCharacter", async (_,{getState}) => {


      const {character:{character}} = getState() as {character:IInitialState};
      
      console.log(character);
      
      const {data} = await axios.post("/characters",character);

      return data

});

export const getCharacter = createAsyncThunk<
    ICharacter,
    undefined,
    { rejectValue: string }>
    ("character/getCharacter", async () => {
    
      const {data} = await axios.get("/characters");

      return data

});

export const characterSlice = createSlice({

    name:'character',
    initialState,
    reducers:{

        setName: (state: IInitialState, action:PayloadAction<string>)=>{

          state.character.name = action.payload
        },

        setCharacter: (state: IInitialState, action:PayloadAction<ICharacter>)=>{

          state.character = action.payload
        },

        characteristicUp: (state: IInitialState, action:PayloadAction<string>) => {

          state.character.characteristics[action.payload].value +=1
        },

        characteristicDown : (state: IInitialState, action:PayloadAction<string>) => {

          if (state.character.characteristics[action.payload].value==0) {

            state.error = 'Значение не может быть меньше нуля'
            return
          }

          if (state.character.characteristics[action.payload].value==state.currentSkill.level) {

            state.info = 'нельзя уменьшить параметр, потому что вы прокачали ветку скила'
            return
          }

          state.character.characteristics[action.payload].value -=1
        },

        calculateHealth : (state: IInitialState) => {

          state.character.characteristics.health.value = state.character.characteristics.strength.value + 3;
        },

        calculateEvasion : (state: IInitialState) => {

          state.character.characteristics.evasion.value = state.character.characteristics.agility.value + 3;
        },

        calculateEnergy : (state: IInitialState) => {

          state.character.characteristics.energy.value =
            state.character.characteristics.agility.value + state.character.characteristics.intelligence.value;
        },

        getDamage : (state: IInitialState) => {

          if (state.character.characteristics.health.value === 0) {
            state.info = 'Вы умерли(';
            state.character = character;
            return
          }

          state.character.characteristics.health.value--;
        },

        skillUp :(state: IInitialState, action:PayloadAction<ISkill>) => {

          let propertyKey 
          let skillKey

          Object.entries(state.character.characteristics).find(([key, value])=>{

            skillKey = getKeyByValue(Skills, action.payload.name)

            if ('skills' in value && skillKey) {
                if (skillKey in value.skills!) {
                  propertyKey = key
                } 
              }
          })

          if (!propertyKey || !skillKey) return 

          if (state.character.characteristics[propertyKey!].skills![skillKey!].level==5) return

          if (state.character.characteristics[propertyKey!].skills![skillKey!].level < state.character.characteristics[propertyKey!].value){
              state.character.characteristics[propertyKey!].skills![skillKey!].level++
              state.currentSkill.level++
          }  else{
            state.info = 'Нельзя прокачать скилл, пока не прокачан параметр ' + state.character.characteristics[propertyKey!].name;
          }
          
          
          
      },

      setCurrentSkill :(state: IInitialState, action:PayloadAction<ISkill>) => {

        state.currentSkill = action.payload
      }
    },
    extraReducers: (builder) => {
    builder
    .addCase(saveCharacter.fulfilled, (state) => {
        state.info = 'Персонаж успешно сохранен'
    })     
    .addCase(getCharacter.fulfilled, (state, {payload}) => {
        state.character = payload
    })
    
        
}
    
    }
)


export const { calculateHealth, calculateEvasion,setName, setCharacter, setCurrentSkill, calculateEnergy, getDamage, characteristicUp, characteristicDown, skillUp } = characterSlice.actions;
