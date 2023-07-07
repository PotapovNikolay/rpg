import { AppDispatch, useAppSelector } from "store";
import { starFill, starNoFill, chevronDoubleRight } from "icons/interface";
import { useDispatch } from "react-redux";
import { skillUp } from "store/slices/character/characterSlice";

interface SkillStarsProps {}

export const SkillStars: React.FC<SkillStarsProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { currentSkill } = useAppSelector((state) => state.character);


    return (
        <div className="skills-stars">
            <div>
                {Array.from({ length: currentSkill.level }, (value, key) => {
                    
                    return (
                        <img
                            key={key}
                            src={starFill}
                            className="skills-stars__image"
                        />
                    );
                })}
                {Array.from({ length: 5 - currentSkill.level }, (value, key) => {
                    return (
                        <img
                            key={key}
                            src={starNoFill}
                            className="skills-stars__image"
                        />
                    );
                })}
            </div>
            <button
                onClick={() => {
                    dispatch(skillUp(currentSkill));
                }}
                className="skills-stars__button"
            >
                <img src={chevronDoubleRight} alt="img" />
            </button>
        </div>
    );
};
