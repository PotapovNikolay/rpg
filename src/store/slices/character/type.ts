import { ICharacter, ISkill } from "types/character";

export interface IInitialState {
    character: ICharacter;
    currentSkill: ISkill;
    info: string | null;
    error: string | null;
}