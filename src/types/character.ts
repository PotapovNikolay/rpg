
export enum LevelOfSkill{
    Untrained,
    Beginner,
    Student,
    Adept,
    Expert,
    Master
}

export enum BaseCharacteristics{
    strength = 'Сила',
    agility = 'Ловкость',
    intelligence = 'Интеллект',
    charisma = 'Харизма'
}

export enum Characteristics{
    health = 'Здоровье',
    evasion = 'Уклонение',
    energy = 'Энергия',
}

export enum Skills{
    attack= 'Атака',
    stealth= 'Скрытность',
    archery= 'Стрельба из лука',
    trainability= 'Обучаемость',
    survival= 'Выживание',
    medicine= 'Медицина',
    intimidation= 'Запугивание',
    insight= 'Проницательность',
    appearance= 'Внешний вид',
    manipulation= 'Манипулирование',
}

export interface ISkill{
    level:LevelOfSkill,
    name:Skills,
    icon:string,
}

export interface ICharacteristic{
    
    name:BaseCharacteristics | Characteristics,
    value:number,
    skills?:{[index: string]:ISkill},     
}

export interface ICharacter {

    name:string,
    currentHealth:number,
    characteristics: {[index: string]:ICharacteristic},
}
