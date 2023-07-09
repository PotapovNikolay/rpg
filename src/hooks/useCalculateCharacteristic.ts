import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { BaseCharacteristics } from "types/character";
import { calculateEnergy, calculateEvasion, calculateHealth } from "store/slices/character/slice";


export const useCalculateCharacteristic = () =>{

  const dispatch = useDispatch<AppDispatch>();

  const calculate = (name:string) =>{

    switch(name) {
    case BaseCharacteristics.strength:
              dispatch(calculateHealth())
            break;
            case BaseCharacteristics.agility:
              dispatch(calculateEvasion())
              dispatch(calculateEnergy())
            break;
            case BaseCharacteristics.intelligence:
              dispatch(calculateEnergy())
            break;
          }
  }

  return calculate
}