import { BaseCharacteristics, ICharacter, LevelOfSkill, Characteristics, Skills } from "types/character";
import {
    book,
    caduceus,
    breath,
    hammer,
    archery,
    island,
    seahorse,
    sing,
    stealth,
    doll,
} from "icons/skills";

export const character :ICharacter ={
        name:'moclay',
        currentHealth:0,
        characteristics:{
            strength:{
                name:BaseCharacteristics.strength,
                value:0,
                skills:{
                    attack:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.attack,
                        icon:hammer,
                    }
                }
            },
            agility:{
                name:BaseCharacteristics.agility,
                value:0,
                skills:{
                    stealth:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.stealth,
                        icon:stealth,
                    },
                    archery:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.archery,
                        icon:archery
                    }
                }
            },
            intelligence:{
                name:BaseCharacteristics.intelligence,
                value:0,
                skills:{
                    trainability:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.trainability,
                        icon:book,
                    },
                    survival:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.survival,
                        icon:island,
                    },
                    medicine:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.medicine,
                        icon:caduceus
                    },
                }
            },
            charisma:{
                name:BaseCharacteristics.charisma,
                value:0,
                skills:{
                    intimidation:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.intimidation,
                        icon:breath
                    },
                    insight:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.insight,
                        icon:sing,
                    },
                    appearance:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.appearance,
                        icon:seahorse
                    },
                    manipulation:{
                        level:LevelOfSkill.Untrained,
                        name:Skills.manipulation,
                        icon:doll
                    },
                }
            },
            health:{
                name:Characteristics.health,
                value: 0
            },
            evasion:{
                name:Characteristics.evasion,
                value:0
            },
            energy:{
                name:Characteristics.energy,
                value:0,
                
            },
        }
       
    }