import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { LegacyRef, createRef, useEffect, useRef } from "react";
import { useAppSelector } from "store";
import { ToKnow } from "./ToKnow";
import { Skill } from "./Skill";
import { Arrows } from "./Arrows";

const breakpoints = {
    1200: {
        perPage: 6,
    },
    1100: {
        
        // width:'52vw'
    },
};

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
    const { character } = useAppSelector((state) => state.character);
    const splideRef = useRef<Splide | null>();

    const skills = Object.values(character.characteristics).map(
        (characteristic) =>
            characteristic.skills && Object.entries(characteristic.skills)
    );

    const skillsArray = skills.flat().filter((skill) => skill !== undefined);

    return (
        <div className="box skills">
                <div className="skills__text">Скиллы</div>
                <ToKnow />
                <div className="slider__container">
                    <Splide
                        hasTrack={false}
                        options={{
                            pagination: false,
                            arrows: false,
                            perPage: 6,
                            
                        }}
                        ref={splideRef}
                    >
                        <Arrows splideRef={splideRef} />
                        <SplideTrack>
                            {skillsArray.map((skill, key) => {
                                if (!skill) return;

                                const [index, value] = skill;

                                return (
                                    <SplideSlide key={key}>
                                        <Skill skill={value} />
                                    </SplideSlide>
                                );
                            })}
                        </SplideTrack>
                    </Splide>
                </div>
        </div>
    );
};
