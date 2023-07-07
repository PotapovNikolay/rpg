import { AppDispatch, useAppSelector } from "store";
import { useDispatch } from "react-redux";
import { saveCharacter, setName } from "store/slices/character/characterSlice";
import { Button } from "../base/Button";

interface NameProps{}

export const Name: React.FC<NameProps> = () => {

    const {name} =  useAppSelector((state) => state.character.character);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="modal__name modal__child  box row">
            <input
                onChange={(e) => {
                    dispatch(setName(e.target.value));
                }}
                type="text"
                className="modal__name__input"
                placeholder="введите имя здесь"
                value={name}
            />
            <Button
                action={() => {
                    dispatch(saveCharacter());
                }}
            >
                <span style={{ color: "white" }}>Сохранить</span>{" "}
            </Button>
        </div>
    );
};