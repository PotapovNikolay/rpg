import { IInitialState } from "../type";

export const process = {
    toggleModal: (state: IInitialState) => {
        state.show = !state.show;
    },
    setProcessEdit: (state: IInitialState) => {
        state.process = "edit";
    },
    togglePreloader: (state: IInitialState) => {
        state.preloader = !state.preloader;
    },
};
