import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "store";
import { toast } from "react-toastify";
import { resetError, resetInfo } from "store/slices/character/slice";

export const useToasts = () =>{

    const { error, info } = useAppSelector((state) => state.character);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (error) {
            toast(error);
            dispatch(resetError());
        }
        if (info) {

            toast(info);
            dispatch(resetInfo());
        }
    }, [error, info]);
}