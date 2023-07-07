
import { Characteristic, BaseCharacteristic } from "components/characteristics";
import { ToKnowSkills } from "../skills/ToKnowSkill";
import { useAppSelector } from "store";
import { SkillStars } from "../skills/SkillStars";
import { Health } from "../characteristics/Health";

interface StatsProps {}

export const Stats: React.FC<StatsProps> = () => {

    
    const { characteristics } = useAppSelector((state) => state.character.character);


    return (
        <div className="box modal__stats">
            <div className="modal__stats__property">Характеристики</div>
            <ToKnowSkills />
            <div className="modal__stats__interactive">
                <SkillStars />
                <Health value={characteristics.health.value} />
            </div>
            <div className="modal__stats__properties">
                {Object.entries(characteristics).map((characteristic, key) => {
                    if (!("skills" in characteristic[1])) return;

                    return (
                        <BaseCharacteristic
                            key={key}
                            characteristic={characteristic}
                        />
                    );
                })}
            </div>
            <div className="modal__stats__properties">
                {Object.entries(characteristics).map((characteristic, key) => {
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
