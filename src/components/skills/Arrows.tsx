// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide } from "@splidejs/react-splide";
import { chevronLeft, chevronRight } from "icons/interface";

interface ArrowsProps {
    splideRef: Splide | null;
}

export const Arrows: React.FC<ArrowsProps> = ({ splideRef }) => {
    const handlePrevClick = () => {
        splideRef.current.go("-1");
    };

    const handleNextClick = () => {
        splideRef.current.go("+1");
    };

    return (
        <div className="slider__custom-arrows">
            <button onClick={handlePrevClick} className="slider__prev-arrow ">
                <img src={chevronLeft} alt="img" />
            </button>
            <button onClick={handleNextClick} className="slider__next-arrow">
                <img src={chevronRight} alt="img" />
            </button>
        </div>
    );
};