import { createSlice } from "@reduxjs/toolkit"
import { IInitialState } from "./type"
import { process } from "./reducers"

const initialState: IInitialState = {

    show:false,
    preloader:true,
    process:'create',
}

export const modalSlice = createSlice({

    name:'modal',
    initialState,
    reducers:{
        ...process,
    }

})

export const {toggleModal, setProcessEdit, togglePreloader} = modalSlice.actions
