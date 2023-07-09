import { IInitialState } from "../type";

export const resets = {
    
    resetInfo:(state: IInitialState)=>{

        state.info = ''
    },

    resetError:(state: IInitialState)=>{
        state.error = ''
    },

}