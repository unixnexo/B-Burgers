import { useState } from "react";

const MenuCard = ({ imgSrc, title, price, handleClick }) => {

    const [isScaled, setIsScaled] = useState(false);

    const handleAnimationClick = () => {
        setIsScaled(true);
        setTimeout(() => setIsScaled(false), 200);
    };

    return (
        <div onClick={() => {handleClick({title, price, imgSrc}), handleAnimationClick()}} className={`flex flex-col items-center justify-start relative transition-all cursor-pointer ${isScaled ? 'scale-95' : 'lg:hover:scale-105'}`}>
            <div className="size-36 sm:size-44 md:size-60 overflow-hidden">
                <img src={imgSrc} className="size-full object-cover" alt="burger" />
            </div>
            <p className="text-center">{title}</p>
            <div className="flex items-center justify-center absolute right-5 top-0 md:top-10 rotate-12 size-10 sm:size-12 text-lg sm:text-xl rounded-full text-white bg-Bred">
                ${price}
            </div>
        </div>
    );
}
 
export default MenuCard;