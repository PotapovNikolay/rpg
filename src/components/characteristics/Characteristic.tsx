import { ICharacteristic } from "@/src/types/character";

interface CharacteristicProps {
    characteristic: [string, ICharacteristic];
}

export const Characteristic: React.FC<CharacteristicProps> = ({
    characteristic: [, { name, value }],
}) => {
    return (
        <div className="characteristic">
            <div>{name}</div>
            <div className="characteristic__point">
                <div>{value}</div>
            </div>
        </div>
    );
};
