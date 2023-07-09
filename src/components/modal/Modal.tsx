import { Skills } from "components/skills/Skills";
import { Characteristics } from "./Characteristics";
import { Name } from "./Name";
import { Image } from "./Image";
import { Back } from "./buttons/Back";
import { useAppSelector } from "store";
import { Preloader } from "../preloader/Preloader";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
    const { preloader } = useAppSelector((state) => state.modal);

    return (
        <div className="modal">
            {preloader && <Preloader />}
            <Image />
            {!preloader && (
                <div className="modal__rigth fade-in">
                    <Name />
                    <Characteristics />
                    <Skills />
                </div>
            )}

            <Back />
        </div>
    );
};
