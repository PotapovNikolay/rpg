import { setCurrentSkill } from "store/slices/character/characterSlice";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { chevronLeft, chevronRight } from "icons/interface";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "store";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { currentSkill, character } = useAppSelector(
        (state) => state.character
    );
    const splideRef = useRef<Splide | null>();

    const handlePrevClick = () => {
        splideRef.current.go("-1");
    };

    const handleNextClick = () => {
        splideRef.current.go("+1");
    };

    const skills = Object.values(character.characteristics).map(
        (characteristic) =>
            characteristic.skills && Object.entries(characteristic.skills)
    );

    const skillsArray = skills.flat().filter((skill) => skill !== undefined);

    return (
        <div className="slider__container">
            <div className="slider__custom-arrows">
                <button
                    onClick={handlePrevClick}
                    className="slider__prev-arrow"
                >
                    <img src={chevronLeft} alt="img" />
                </button>
                <button
                    onClick={handleNextClick}
                    className="slider__next-arrow"
                >
                    <img src={chevronRight} alt="img" />
                </button>
            </div>
            <div className="box modal__skills">
                <div className="modal__skills__slider">
                    <Splide
                        hasTrack={false}
                        options={{
                            perPage: 6,
                            pagination: false,
                            arrows: false,
                        }}
                        ref={splideRef}
                    >
                        <SplideTrack>
                            {skillsArray.map((skill, key) => {
                                if (!skill) return;

                                const [index, value] = skill;
                                
                                return (
                                    <SplideSlide key={key}>
                                        <button
                                            

                                            onClick={() => {
                                                dispatch(
                                                    setCurrentSkill(value)
                                                );
                                            }}
                                            className={
                                                currentSkill.name == value.name
                                                    ? "button modal__skills__button-active"
                                                    : "button modal__skills__button"
                                            }
                                            key={key}
                                        >
                                            <img
                                                src={value?.icon}
                                                alt="skill"
                                                width={45}
                                            />
                                            <div className="point">
                                                {value?.level}
                                            </div>
                                        </button>
                                    </SplideSlide>
                                );
                            })}
                        </SplideTrack>
                    </Splide>
                </div>
            </div>
        </div>
    );
};
