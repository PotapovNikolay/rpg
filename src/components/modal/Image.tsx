import { useDispatch } from "react-redux";
import character from "../../../public/images/character.png";
import { AppDispatch } from "store";
import { togglePreloader } from "store/slices/modal/slice";

interface ImageProps {}

export const Image: React.FC<ImageProps> = () => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="modal__container">
            <img
                src={character}
                onLoad={() => {
                   dispatch(togglePreloader());
                }}
                alt="character"
                className="modal__character fade-in"
            />
            
        </div>
    );
};
