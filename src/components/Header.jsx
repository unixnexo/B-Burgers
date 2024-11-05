import { useState, useEffect } from "react";
import Popover from "../components/Popover";
import Message from "./Message";

const Header = () => {
    const [orderNumber, setOrderNumber] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [openPopoverId, setOpenPopoverId] = useState(null);
    const [isMessageShown, setIsMessageShown] = useState(false);
    const [message, SetMessage] = useState('');


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
        SetMessage("The waiter will come soon!");
        setIsMessageShown(true);
        // for unsupported popover
        togglePopover('waiter');
    };

    // for unsupported popover - only one should be open at a time
    const togglePopover = (popoverId) => {
        setOpenPopoverId((prevId) => (prevId === popoverId ? null : popoverId));
    };

    return (
    <>
        <header className="p-2">
            
            <div className="flex justify-between items-start">
                {/* logo */}
                <div className="flex items-end lg:items-center">
                    <img src="./b.png" alt="logo" />
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
                    <button popovertarget="call-the-waiter-popover" onClick={() => togglePopover('waiter')} className="bg-Bred p-2 rounded-md">Call the waiter</button>
                </div>
            </div>

            {/* menu on bottom-right */}
            <div className="menu-container">
                <div onClick={toggleMenu} className="fixed bottom-0 right-0 z-10 bg-Bred rounded-tl-full pt-5 pl-5 pb-1 pr-1 cursor-pointer">
                    <img width="44" height="44" src="https://img.icons8.com/3d-fluency/94/hamburger.png" alt="hamburger"/>
                </div>
                <div className={`menu-content [&>button]:absolute [&>button]:bg-white [&>button]:p-2 [&>button]:rounded-lg ${isOpen ? 'menu-active' : ''}`}>
                    <button popovertarget="branches-popover" onClick={() => togglePopover('branches')} className="top-8 left-[160px] ">Branches</button>
                    <button popovertarget="call-the-waiter-popover" onClick={() => togglePopover('waiter')} className="top-20 left-[126px]">Call the waiter</button>
                    <button popovertarget="operating-hours-popover" onClick={() => togglePopover('operating-hours')} className="top-32 left-[48px]">Restaurant operating hours</button>
                    <p className="absolute top-[200px] left-5 text-sm">You are in Florida US branch!</p>
                    <p className="absolute top-[220px] left-5 text-sm">We are open until 11 PM.</p>
                </div>
            </div>

        </header>

        <Popover 
            popoverId="call-the-waiter-popover" 
            isVisible={openPopoverId === 'waiter'}
            setIsVisible={() => togglePopover('waiter')}>
            <div className="flex flex-col items-center py-3">
                <div className="flex space-x-2 items-center">
                    <p>You're table number is</p>
                    <input 
                        type="number" 
                        className="border-0 border-b rounded-none outline-none h-5 text-white bg-Bred"
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
        <Popover 
            popoverId="branches-popover" 
            isVisible={openPopoverId === 'branches'}
            setIsVisible={() => togglePopover('branches')}>
            <ul>
                <p className="text-3xl mb-1">US</p>
                <li>New York - 2440 Geraldine Lane</li>
                <li>Folsom - 675 Patton Lane</li>
                <li>Norfolk - 1735 Pinchelone Street</li>
                <li>Brewster - 1872 Old Dear Lane</li>
                <hr className="my-4"/>
                <p className="text-3xl mb-1">Iran</p>
                <li>Tehran - Shams Blind Alley, Vali-e-Asr St</li>
                <li>Shiraz - After 10th Alley, Eram St</li>
                <hr className="my-4"/>
                <p className="text-3xl mb-1">Italy</p>
                <li>Briatico - Via Rocca de Baldi 55</li>
                <li>Santa Maria - Via Croce Rossa 108</li>
            </ul>
        </Popover>
        <Popover 
            popoverId="operating-hours-popover" 
            isVisible={openPopoverId === 'operating-hours'}
            setIsVisible={() => togglePopover('operating-hours')}>
            <p className="text-center mb-4 text-2xl">All Branches, All Cities!</p> 
            <div className="*:flex *:justify-between">
                <div>
                    <p>Monday</p>
                    <p>12 AM to 11 PM</p>
                </div>
                <div>
                    <p>Tuesday</p>
                    <p>12 AM to 11 PM</p>
                </div>
                <div>
                    <p>Wednesday</p>
                    <p>12 AM to 11 PM</p>
                </div>
                <div>
                    <p>Thursday</p>
                    <p>12 AM to 11 PM</p>
                </div>
                <div>
                    <p>Friday</p>
                    <p>12 AM to 11 PM</p>
                </div>
                <div>
                    <p>Saturday</p>
                    <p>6 PM to 11 PM</p>
                </div>
                <div>
                    <p>Sunday</p>
                    <p>6 PM to 11 PM</p>
                </div>
            </div>
        </Popover>

        <Message isMessageShown={isMessageShown} setIsMessageShown={setIsMessageShown} message={message} />

    </>
    );
}
 
export default Header;