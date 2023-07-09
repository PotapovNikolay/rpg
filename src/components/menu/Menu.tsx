import { useDispatch } from "react-redux";
import { ButtonPrimary } from "components/base/ButtonPrimary";
import { AppDispatch, useAppSelector } from "store";
import { setProcessEdit, toggleModal } from "store/slices/modal/slice";
import { getCharacter } from "store/slices/character/slice";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { process } = useAppSelector((state) => state.modal);

    return (
        <div className="modal__menu">
            {process == "create" ? (
                <ButtonPrimary
                    action={() => {
                        dispatch(setProcessEdit());
                        dispatch(toggleModal());
                    }}
                >
                    Создать
                </ButtonPrimary>
            ) : (
                <ButtonPrimary
                    action={() => {
                        dispatch(toggleModal());
                    }}
                >
                    Вернуться к созданию персонажа
                </ButtonPrimary>
            )}
            <ButtonPrimary
                action={() => {
                    dispatch(getCharacter());
                    dispatch(toggleModal());
                }}
            >
                Загрузить
            </ButtonPrimary>
        </div>
    );
};
