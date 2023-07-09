import { ISkill, Skills } from "types/character";
import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "../type";

interface ISkillAndProperty {
    propertyKey: string;
    skillKey: string;
}

export const skills = {
    skillUp: (state: IInitialState, action: PayloadAction<ISkill>) => {
        const { propertyKey, skillKey } = findSkillAndPropertyKey(
            state,
            action.payload.name
        );

        if (!propertyKey || !skillKey) return;

        const currentSkill =
            state.character.characteristics[propertyKey].skills![skillKey];

        const currentProperty = state.character.characteristics[propertyKey!];

        if (currentSkill.level == 5) return;

        if (currentSkill.level < currentProperty.value) {
            currentSkill.level++;
            state.currentSkill.level++;
        } else {
            state.info =
                "Нельзя прокачать скилл, пока не прокачан параметр " +
                currentProperty.name;
        }
    },

    setCurrentSkill : (
    state: IInitialState,
    action: PayloadAction<ISkill>
) => {
    state.currentSkill = action.payload;
}
};

function getKeyByValue<T extends { [index: string]: string }>(
    enumObject: T,
    value: string
): keyof T | null {
    const keys = Object.keys(enumObject) as Array<keyof T>;
    for (const key of keys) {
        if (enumObject[key] === value) {
            return key;
        }
    }
    return null;
}

function findSkillAndPropertyKey(
    state: IInitialState,
    skillName: string
): ISkillAndProperty {
    let propertyKey: string = "";
    let skillKey: string = "";

    Object.entries(state.character.characteristics).find(([key, value]) => {
        skillKey = getKeyByValue(Skills, skillName)!;

        if (!skillKey || !("skills" in value)) return false;

        if (skillKey in value.skills!) {
            propertyKey = key;
            return true;
        }
    });

    return { propertyKey, skillKey };
}





