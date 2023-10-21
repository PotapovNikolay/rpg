import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "components/modal/Modal";
import { useAppSelector } from "store";
import { Actions } from "components/modal/buttons/Actions";
import { Menu } from "components/menu/Menu";
import { useToasts } from "hooks/index";

function App() {
    const { show } = useAppSelector((state) => state.modal);

    useToasts();

    return (
        <>
            <ToastContainer />
            
            <div className="main">
                {show ? (
                    <div className="main__column">
                        <Modal />
                        <Actions />
                    </div>
                ) : (
                    <Menu />
                )}
            </div>
        </>
    );
}

export default App;
