import { useAutoAnimate } from '@formkit/auto-animate/react'
import Popover from "../components/Popover";


const Receipt = ({ userReceipt, setUserReceipt, totalPrice, SetTotalPrice }) => {

    const [animationParent] = useAutoAnimate();

    if (totalPrice !== 0) {

        const handleQuantity = (itemId, type) => {
            setUserReceipt(prev => 
                prev.map(item => 
                item.id === itemId
                    ? type === "decrease" 
                        ? { ...item, totalPrice: item.totalPrice - item.price, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                        : { ...item, totalPrice: item.totalPrice + item.price, quantity: item.quantity + 1}
                    : item,
                ).filter(item => item.quantity > 0)
            );

            // Update total price based on updated receipt
            setUserReceipt(updatedReceipt => {
                const newTotalPrice = updatedReceipt.reduce((sum, item) => sum + item.price * item.quantity, 0);
                SetTotalPrice(newTotalPrice);
                return updatedReceipt;
            });
        };


        return (
            <>
            <div className="mx-auto space-y-5" ref={animationParent}>
    
                {userReceipt.map((item) => (
                    <div key={item.id} className="flex justify-between space-x-10 lg:space-x-0 lg:min-w-[600px] text-sm sm:text-xl px-3 pb-4 bg-white shadow-xl rounded-2xl overflow-hidden">
                        <div className="flex space-x-2 overflow-hidden">
                            <div className="size-20 sm:size-24 md:size-36 overflow-hidden shrink-0">
                                <img src={item.imgSrc} className="object-cover size-full" alt={item.title} />
                            </div>
                            <div className="self-end mb-2 sm:mb-4">
                                    <p>{item.title}</p>
                                    <div className="flex *:flex *:items-center *:justify-center *:size-6 [&>*:not(p)]:border mt-2 hover:[&>*:not(p)]:bg-Bred/70 hover:[&>*:not(p)]:text-white active:[&>*:not(p)]:bg-Bred">
                                        <button onClick={() => handleQuantity(item.id, "decrease")} className="rounded-l-md">-</button>
                                        <p className="text-sm border-y">{item.quantity}</p>
                                        <button onClick={() => handleQuantity(item.id, "increase")} className="rounded-r-md">+</button>
                                    </div>
                            </div>
                        </div>
                        <div className="self-end flex flex-col items-center mb-2 sm:mb-4 pr-3">
                            <p className="text-xs text-black/50">${item.price}x{item.quantity}</p>
                            <p className="text-Bred/80">${item.totalPrice}</p>
                        </div>
                    </div>
                ))}
    
                <br/>
                <hr />
                
                <div className="flex justify-between mx-3">
                    <div className="text-Bred text-3xl font-bold">
                        <p>${totalPrice}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 *:py-2.5 *:w-36 *:rounded-2xl">
                        <button className="bg-Bred text-white">Pay Online</button>
                        <button popovertarget="pay-at-counter-popover" className="bg-white shadow-md border">Pay at Counter</button>
                    </div>
                </div>
    
            </div>

            {/* implement popover for iphone  */}
            <Popover 
            popoverId="pay-at-counter-popover">
            <div className="flex flex-col items-center py-3">
                <div className="flex flex-col space-x-2 items-center">
                    <p>Your order code is <span className="text-Bblack">#Bravo189</span></p>
                    <p>You are choosing to pay at the counter, <span className="text-Bblack">Are you sure?</span></p>
                </div>
                <button
                    popovertarget="pay-at-counter-popover"
                    popovertargetaction="hide"
                     className="mt-5 bg-white rounded-md text-Bblack p-2 disabled:bg-white/60 disabled:text-Bblack/60"
                    >Pay at Counter
                </button>
            </div>
            </Popover>
            </>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center grow">
            <img src="./public/noBurger.avif" className="rounded-xl" alt="no burgers" />
            <p className="mt-3 text-base sm:text-xl md:text-2xl text-center">You haven't picked any burger yet!</p>
        </div>
    );
}
 
export default Receipt;
