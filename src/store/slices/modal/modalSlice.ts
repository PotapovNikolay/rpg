import { createSlice } from "@reduxjs/toolkit"

type TProcess = 'edit' | 'create'

interface IInitialState{
    show:boolean,
    process:TProcess
}

const initialState: IInitialState = {

    show:false,
    process:'create'
}

export const modalSlice = createSlice({

    name:'modal',
    initialState,
    reducers:{
        toggleModal:(state:IInitialState)=>{

            state.show = !state.show
        },
        setProcessEdit:(state:IInitialState)=>{

            state.process = 'edit'
        },
    }

})

export const {toggleModal, setProcessEdit} = modalSlice.actions
