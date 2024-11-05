import { useEffect, useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Message = ({ isMessageShown, setIsMessageShown, message }) => {

    const [isVisible, setIsVisible] = useState(true);
    const [animationParent] = useAutoAnimate();

    useEffect(() => {
        if (isMessageShown) {
            setIsVisible(true); 
            
            const timer = setTimeout(() => {
                setIsVisible(false);
                setIsMessageShown(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isMessageShown]);

    const handleClick = () => {
        setIsVisible(false);
        setIsMessageShown(false);
    };


    return (
        <div ref={animationParent}>
        {isMessageShown && isVisible && (
            <div className="fixed left-2 bottom-2 flex items-start space-x-10 z-50 bg-green-700/90 p-3 rounded-xl text-white">
                <p className="max-w-56">{message}</p>
                <button onClick={handleClick} className="flex items-center justify-center bg-white p-1.5 rounded-full *:fill-Bblack">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 48 48">
                        <path d="M 35.548828 4.9511719 A 1.50015 1.50015 0 0 0 34.263672 5.6523438 L 23.5 21.349609 L 12.736328 5.6523438 A 1.50015 1.50015 0 0 0 11.462891 4.9824219 A 1.50015 1.50015 0 0 0 10.263672 7.3476562 L 21.681641 24 L 10.263672 40.652344 A 1.50015 1.50015 0 1 0 12.736328 42.347656 L 23.5 26.650391 L 34.263672 42.347656 A 1.50015 1.50015 0 1 0 36.736328 40.652344 L 25.318359 24 L 36.736328 7.3476562 A 1.50015 1.50015 0 0 0 35.548828 4.9511719 z"></path>
                    </svg>
                </button>
            </div>
        )}
        </div>
    );
}
 
export default Message;