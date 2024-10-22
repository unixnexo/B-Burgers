const Popover = () => {
    return (
        <div popover="auto" id="call-the-waiter-popover" className="bg-Bred rounded-lg w-96 h-28 text-Bblack">
            <div className="p-3">
                <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
            </div>
            <div className="p-3 border-t border-Bblack/30">
                <p>come on men!</p>
            </div>
        </div>
    );
}
 
export default Popover;