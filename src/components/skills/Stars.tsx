import { AppDispatch, useAppSelector } from "store";
import { starFill, starNoFill, chevronDoubleRight } from "icons/interface";
import { useDispatch } from "react-redux";
import { skillUp } from "store/slices/character/slice";

interface StarsProps {}

export const Stars: React.FC<StarsProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { currentSkill } = useAppSelector((state) => state.character);

    return (
        <div className="stars">
            <div className="stars__container">
                {Array.from({ length: currentSkill.level }, (value, key) => {
                    return (
                        <img
                            key={key}
                            src={starFill}
                            className="stars__image"
                        />
                    );
                })}
                {Array.from(
                    { length: 5 - currentSkill.level },
                    (value, key) => {
                        return (
                            <img
                                key={key}
                                src={starNoFill}
                                className="stars__image"
                            />
                        );
                    }
                )}
            </div>
            <button
                onClick={() => {
                    dispatch(skillUp(currentSkill));
                }}
                className="stars__button"
            >
                <img src={chevronDoubleRight} alt="img" />
            </button>
        </div>
    );
};
