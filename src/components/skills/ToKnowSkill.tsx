import { useAppSelector } from "store";

interface ToKnowSkillsProps{}

export const ToKnowSkills: React.FC<ToKnowSkillsProps> = () => {

    const { currentSkill } = useAppSelector((state) => state.character);

    return (
        <div className="modal__toknowskills">
            <div>
                <div className="h3">{currentSkill.name}</div>
                <div className="modal__toknowskills__text">
                    Увеличивайте количество звездочек, чтобы развить скилл
                </div>
            </div>
            <div>
                <img />
            </div>
        </div>
    );
};