import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "components/modal/Modal";
import { useEffect } from "react";
import { AppDispatch, useAppSelector } from "store";
import { Menu } from "components/modal/Menu";
import { Button } from "components/base/Button";
import { useDispatch } from "react-redux";
import { getDamage } from "./store/slices/character/characterSlice";

function App() {
    const { error, info } = useAppSelector((state) => state.character);
    const { show } = useAppSelector((state) => state.modal);
     const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (error) toast(error);

        if (info) toast(info);
    }, [error, info]);

    return (
        <>
            <ToastContainer />
            <div className="main">
                {show ? (
                    <div className="main__column">
                        <Modal />
                        <div className="main__column__button box">
                            <Button action={() => {dispatch(getDamage())}}>Получить урон</Button>
                        </div>
                    </div>
                ) : (
                    <Menu />
                )}
            </div>
        </>
    );
}

export default App;
