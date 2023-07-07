import { useDispatch } from "react-redux";
import { Button } from "components/base/Button";
import { AppDispatch, useAppSelector } from "store";
import { setProcessEdit, toggleModal } from "store/slices/modal/modalSlice";
import { getCharacter } from "store/slices/character/characterSlice";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { process } = useAppSelector((state) => state.modal);

    return (
        <div className="modal__menu">
            {process == "create" ? (
                <Button
                    action={() => {
                        dispatch(setProcessEdit());
                        dispatch(toggleModal());
                    }}
                >
                    Создать
                </Button>
            ) : (
                <Button
                    action={() => {
                        dispatch(toggleModal());
                    }}
                >
                    Редактировать
                </Button>
            )}
            <Button
                action={() => {
                    dispatch(getCharacter());
                    dispatch(toggleModal());
                }}
            >
                Загрузить
            </Button>
        </div>
    );
};
