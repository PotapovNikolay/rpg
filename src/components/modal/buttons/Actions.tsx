import { AppDispatch } from "store";
import { getDamage } from "store/slices/character/slice";
import { toggleModal } from "store/slices/modal/slice";
import { useDispatch } from "react-redux";
import { ButtonPrimary } from "components/base/ButtonPrimary";

interface ActionsProps {}

export const Actions: React.FC<ActionsProps> = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="main__button">
            <ButtonPrimary
                action={() => {
                    dispatch(toggleModal());
                }}
            >
                Назад
            </ButtonPrimary>

            <ButtonPrimary
                action={() => {
                    dispatch(getDamage());
                }}
            >
                Получить урон
            </ButtonPrimary>
        </div>
    );
};
