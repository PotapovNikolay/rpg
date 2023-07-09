import { useAppSelector } from "store";
import { Stars } from "./Stars";

interface ToKnowProps {}

export const ToKnow: React.FC<ToKnowProps> = () => {
    const { currentSkill } = useAppSelector((state) => state.character);

    return (
        <div className="toknowskills">
            <div className="toknowskills__stars">
                <div className="h3">{currentSkill.name}</div>
                <Stars />
            </div>
            {/* <div className="toknowskills__text">
                Увеличивайте количество звездочек, чтобы развить скилл
            </div> */}
        </div>
    );
};
