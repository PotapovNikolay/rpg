import { toBack } from 'icons/interface';
import character from '../../../public/images/character.png'
import { Skills } from '../skills/Skills';
import { Name } from './Name';
import { Stats } from './Stats';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import { toggleModal } from 'store/slices/modal/modalSlice';

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="modal">
            <img src={character} alt="character" className="modal__character" />
            {/* <Menu /> */}
            <div className="modal__rigth">
                <Name />
                <Stats />
                <Skills />
            </div>
            <button onClick={()=>{dispatch(toggleModal());}} className="button modal__back">
                <img src={toBack} width={50} alt="назад" />
            </button>
        </div>
    );
};
