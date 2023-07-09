import { AppDispatch } from "store";
import { useDispatch } from "react-redux";
import { toggleModal } from "store/slices/modal/slice";
import { toBack as icon } from "icons/interface";

interface BackProps{}

export const Back:React.FC<BackProps> = () => {

    const dispatch = useDispatch<AppDispatch>();

    return <button
            onClick={() => {
                dispatch(toggleModal());
            }}
            className="button modal__back"
        >
            <img src={icon} width={50} alt="назад" className="" />
        </button>
}