import { ICharacteristic } from "@/src/types/character";

interface CharacteristicProps {
    characteristic: [string, ICharacteristic];
}

export const Characteristic: React.FC<CharacteristicProps> = ({
    characteristic: [characteristicKey, { name, value }],
}) => {
    return (
        <div className="property">
            <div>{name}</div>
            <div className="property__point">
                <div>{value}</div>
            </div>
        </div>
    );
};
