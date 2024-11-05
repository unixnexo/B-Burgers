import { useAutoAnimate } from '@formkit/auto-animate/react'
import Popover from "../components/Popover";
import { useRef, useState } from 'react';


const Receipt = ({ userReceipt, setUserReceipt, totalPrice, SetTotalPrice }) => {

    const [openPopoverId, setOpenPopoverId] = useState(null);
    const [animationParent] = useAutoAnimate();

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


    // for unsupported popover - only one should be open at a time
    const togglePopover = (popoverId) => {
        setOpenPopoverId((prevId) => (prevId === popoverId ? null : popoverId));
    };

    // for credit card 
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);
    const input6Ref = useRef(null);
    const input7Ref = useRef(null);
    const input8Ref = useRef(null);

    const moveToNextInput = (e, nextInput) => {
        if (e.target.value.length === e.target.maxLength) {
            nextInput.current.focus();
        }
    };


    if (totalPrice !== 0) {

        return (
            <>
            <div className="mx-auto space-y-5" ref={animationParent}>
    
                {userReceipt.map((item) => (
                    <div key={item.id} className="flex justify-between space-x-10 lg:space-x-0 min-w-[90vw] lg:min-w-[600px] text-sm sm:text-xl px-3 pb-4 bg-white shadow-xl rounded-2xl overflow-hidden">
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
                        <button popovertarget="pay-online" onClick={() => togglePopover('payOnline')} className="bg-Bred text-white">Pay Online</button> 
                        <button popovertarget="pay-at-counter-popover" onClick={() => togglePopover('payAtCounter')} className="bg-white shadow-md border">Pay at Counter</button>
                    </div>
                </div>
    
            </div>


            <Popover 
            popoverId="pay-at-counter-popover"
            isVisible={openPopoverId === 'payAtCounter'}
            setIsVisible={() => togglePopover('payAtCounter')}
            >
            <div className="flex flex-col items-center py-3 text-center">
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
            <Popover 
            popoverId="pay-online"
            isVisible={openPopoverId === 'payOnline'}
            setIsVisible={() => togglePopover('payOnline')}
            >
            <div className="flex flex-col items-center py-3">
                <div className="flex flex-col space-x-2 mb-5">
                    <label htmlFor="card-number" className="ml-2">Card Number</label>
                    <div className="flex space-x-2 mt-1 mb-5 *:w-16 *:rounded-sm *:text-black *:text-center *:outline-none *:border-none">
                        <input type="text" inputMode="numeric" pattern="[0-9]*" id="card-number" maxLength={4} ref={input1Ref} onChange={(e) => moveToNextInput(e, input2Ref)} />
                        <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={4} ref={input2Ref} onChange={(e) => moveToNextInput(e, input3Ref)} />
                        <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={4} ref={input3Ref} onChange={(e) => moveToNextInput(e, input4Ref)} />
                        <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={4} ref={input4Ref} onChange={(e) => moveToNextInput(e, input5Ref)} />
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <label htmlFor="expiration-date">Expiration Date</label>
                            <div className="flex [&>*:not(span)]:w-10 [&>*:not(span)]:text-black [&>*:not(span)]:text-center *:rounded-sm *:outline-none *:border-none space-x-1.5 mt-1">
                                <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={2} id="expiration-date" ref={input5Ref} onChange={(e) => moveToNextInput(e, input6Ref)} />
                                <span>/</span>
                                <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={2} ref={input6Ref} onChange={(e) => moveToNextInput(e, input7Ref)} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cvv2-code" className="block mb-1">CVV2</label>
                            <input type="text" inputMode="numeric" pattern="[0-9]*" id="cvv2-code" maxLength={5} className="w-16 rounded-sm outline-none border-none text-black text-center" ref={input7Ref} onChange={(e) => moveToNextInput(e, input8Ref)} />
                        </div>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="name" className="block mb-1">Full Name</label>
                        <input type="text" id="name" className="w-full rounded-sm outline-none border-none text-black px-1" ref={input8Ref}/>
                    </div>
                </div>
                <button
                    popovertarget="pay-online"
                    popovertargetaction="hide"
                     className="mt-5 bg-white rounded-md text-Bblack p-2 disabled:bg-white/60 disabled:text-Bblack/60"
                    >Pay Online
                </button>
            </div>
            </Popover>
            </>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center grow">
            <img src="./public/noBurger.webp" className="rounded-xl" alt="no burgers" />
            <p className="mt-3 text-base sm:text-xl md:text-2xl text-center">You haven't picked any burger yet!</p>
        </div>
    );
}
 
export default Receipt;
