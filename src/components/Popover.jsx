import { useRef } from 'react';


const Popover = ({ children, popoverId }) => {

    // check for support
    function supportsPopover() {
        return HTMLElement.prototype.hasOwnProperty("popover");
    }
    const popoverSupported = supportsPopover();

    const popoverRef = useRef(null);
    const handleClick = () => {
        popoverRef.current.hidePopover();
    };


    if (popoverSupported) {
        return (
            <div popover="auto" id={popoverId} ref={popoverRef} className="bg-Bred rounded-lg w-96 min-h-28 text-white shadow-xl backdrop:bg-black/40">
                <div className="p-3">
                    <div onClick={handleClick} className="cursor-pointer hover:bg-white/30 active:bg-white/50 rounded-full w-fit p-1 transition-all duration-200 ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="p-3 border-t border-white/30">
                    {children}
                </div>
            </div>
        );
    }
    return (
        <h1>html popover not supported</h1>
    );
    
}
 
export default Popover;