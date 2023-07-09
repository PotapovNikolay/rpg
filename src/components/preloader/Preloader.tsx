
interface PreloaderProps{}

export const Preloader:React.FC<PreloaderProps> = () =>{

    return (
        <div className="preloader">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}