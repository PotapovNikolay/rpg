
import { Characteristic, BaseCharacteristic } from "components/characteristics";
import { useAppSelector } from "store";
import { Health } from "../characteristics/Health";

interface CharacteristicsProps {}

export const Characteristics: React.FC<CharacteristicsProps> = () => {
    const { character } = useAppSelector(
        (state) => state.character
    );

    return (
        <div className="box characteristics">
            <div className="characteristics__text">Характеристики</div>

            <div className="characteristics__health">
                <Health health={character.characteristics.health.value} currentHealth={character.currentHealth} />
            </div>
            <div className="characteristics__characteristic">
                {Object.entries(character.characteristics).map((characteristic, key) => {
                    if (!("skills" in characteristic[1])) return;

                    return (
                        <BaseCharacteristic
                            key={key}
                            characteristic={characteristic}
                        />
                    );
                })}
            </div>
            <div className="characteristics__characteristic">
                {Object.entries(character.characteristics).map((characteristic, key) => {
                    if (
                        "skills" in characteristic[1] ||
                        characteristic[0] === "health"
                    )
                        return;

                    return (
                        <Characteristic
                            key={key}
                            characteristic={characteristic}
                        />
                    );
                })}
            </div>
        </div>
    );
};
