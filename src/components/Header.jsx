import { useState, useEffect } from "react";
import Popover from "../components/Popover";

const Header = () => {
    const [orderNumber, setOrderNumber] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
        // order calls
        randomOrderGenerator(); // Call once to generate an order immediately
        const interval = setInterval(() => {
          randomOrderGenerator();
        }, 7000);
        return () => clearInterval(interval);

    }, []);


    // order calls
    function randomOrderGenerator() {
        const number =  Math.floor(100 + Math.random() * 900);
        setOrderNumber(number);
    }   
    

    // for bottom-right menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    // for popover
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleCallWaiterClick = () => {
        console.log('submited, show a toast message');
    };

    return (
        <header className="p-2">
            
            <div className="flex justify-between items-start">
                {/* logo */}
                <div className="flex items-end lg:items-center">
                    <img src="/b.png" alt="logo" />
                    <div className="luckiest-guy-regular text-2xl leading-5">
                        <p>Bur</p>
                        <p>Ger</p>
                    </div>
                </div>

                {/* order ready */}
                <div className="text-center">
                    <p className="luckiest-guy-regular text-4xl sm:text-6xl">{orderNumber}</p>
                    <p className="text-Bred sm:text-base text-xs blinking-animation leading-[4px] sm:leading-3">Order is ready</p>
                </div>

                {/* big btn */}
                <div className="relative sm:flex hidden items-start space-x-3">
                    <button popovertarget="call-the-waiter-popover" className="bg-Bred p-2 rounded-md">Call the waiter</button>
                </div>
                <Popover popoverId="call-the-waiter-popover">
                    <div className="flex flex-col items-center py-3">
                        <div className="flex space-x-2 items-center">
                            <p>You're table number is</p>
                            <input 
                                type="number" 
                                className="border-0 border-b outline-0 h-5 text-white bg-Bred"
                                value={inputValue}
                                onChange={handleInputChange} 
                            />
                        </div>
                        <button
                            popovertarget="call-the-waiter-popover"
                            popovertargetaction="hide"
                            onClick={handleCallWaiterClick} 
                            disabled={!inputValue} className="mt-5 bg-white rounded-md text-Bblack p-2 disabled:bg-white/60 disabled:text-Bblack/60"
                            >Call the waiter
                        </button>
                    </div>
                </Popover>
            </div>

            {/* menu on bottom-right */}
            <div className="menu-container">
                <div onClick={toggleMenu} className="fixed bottom-0 right-0 z-10 bg-Bred rounded-tl-full pt-5 pl-5 pb-1 pr-1 cursor-pointer">
                    <img width="44" height="44" src="https://img.icons8.com/3d-fluency/94/hamburger.png" alt="hamburger"/>
                </div>
                <div className={`menu-content [&>button]:absolute [&>button]:bg-white [&>button]:p-2 [&>button]:rounded-lg ${isOpen ? 'menu-active' : ''}`}>
                    <button className="top-8 left-[160px] ">Branches</button>
                    <button className="top-20 left-[126px]">Call the waiter</button>
                    <button className="top-32 left-[48px]">Restaurant operating hours</button>
                    <p className="absolute top-[200px] left-5 text-sm">You are in Florida US branch!</p>
                    <p className="absolute top-[220px] left-5 text-sm">We are open until 11 PM.</p>
                </div>
            </div>

        </header>
    );
}
 
export default Header;