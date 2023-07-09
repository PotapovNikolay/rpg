import { AppDispatch, useAppSelector } from "store";
import { useDispatch } from "react-redux";
import { setCurrentSkill } from "store/slices/character/slice";
import { ISkill } from "types/character";

interface SkillProps {
    skill: ISkill;
}

export const Skill: React.FC<SkillProps> = ({ skill }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { currentSkill } = useAppSelector((state) => state.character);

    return (
        <button
            onClick={() => {
                dispatch(setCurrentSkill(skill));
            }}
            className={
                currentSkill.name == skill.name
                    ? "skills__button-active"
                    : "skills__button"
            }
        >
            <img src={skill?.icon} alt="skill" />
            <div className="level">{skill?.level}</div>
        </button>
    );
};