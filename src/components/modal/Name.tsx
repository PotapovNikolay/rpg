import { AppDispatch, useAppSelector } from "store";
import { useDispatch } from "react-redux";
import { saveCharacter, setName } from "store/slices/character/slice";
import { Input } from "components/base/Input";

interface NameProps {}

export const Name: React.FC<NameProps> = () => {
    const { name } = useAppSelector((state) => state.character.character);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="modal__child  row naming__mx">
            <div className="naming box ">
                <Input
                    value={name}
                    placeHolder="введите имя здесь"
                    className="naming__input"
                    action={(value) => {
                        dispatch(setName(value));
                    }}
                />
            </div>
            <div
                onClick={() => {
                    dispatch(saveCharacter());
                }}
                className="box cursor"
                style={{ color: "white" }}
            >
                Сохранить
            </div>
        </div>
    );
};
