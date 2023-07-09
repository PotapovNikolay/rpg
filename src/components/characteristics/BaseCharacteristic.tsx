import { ICharacteristic } from "types/character";
import { dashCircleFill, plusCircleFill } from "icons/interface";
import { AppDispatch } from "store";
import { useDispatch } from "react-redux";
import {
    characteristicDown,
    characteristicUp,
} from "store/slices/character/slice";
import { useCalculateCharacteristic } from "hooks/useCalculateCharacteristic";
import { useEffect } from "react";

interface BaseCharacteristicProps {
    characteristic: [string, ICharacteristic];
}

export const BaseCharacteristic: React.FC<BaseCharacteristicProps> = ({
    characteristic: [characteristicKey, { name, value }],
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const calculateCharacteristic = useCalculateCharacteristic();

    useEffect(() => {
        calculateCharacteristic(name);
    }, []);

    return (
        <div className="characteristic">
            <div>{name}</div>
            <div className="characteristic__point">
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
