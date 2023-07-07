import { ICharacteristic } from "@/src/types/character";
import { dashCircleFill, plusCircleFill } from "icons/interface";
import { AppDispatch } from "store";
import { useDispatch } from "react-redux";
import {
    characteristicDown,
    characteristicUp,
} from "store/slices/character/characterSlice";
import { useCalculateCharacteristic } from "../../hooks/useCalculateCharacteristic";
import { useEffect } from "react";

interface BaseCharacteristicProps {
    characteristic: [string, ICharacteristic];
}

export const BaseCharacteristic: React.FC<BaseCharacteristicProps> = ({
    characteristic: [characteristicKey, { name, value }],
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const calculateCharacteristic = useCalculateCharacteristic();

    useEffect(()=>{
        calculateCharacteristic(name);
    }, [])

    return (
        <div className="property">
            <div>{name}</div>
            <div className="property__point">
                <button
                    onClick={() => {
                        dispatch(characteristicDown(characteristicKey));
                        calculateCharacteristic(name);
                    }}
                    className="button"
                >
                    <img src={dashCircleFill} alt="dash" />
                </button>
                <div>{value}</div>
                <button
                    onClick={() => {
                        dispatch(characteristicUp(characteristicKey));
                        calculateCharacteristic(name);
                    }}
                    className="button"
                >
                    <img src={plusCircleFill} alt="dash" />
                </button>
            </div>
        </div>
    );
};
