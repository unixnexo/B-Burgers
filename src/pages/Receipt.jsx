const Receipt = ({ userReceipt, totalPrice }) => {
    if (totalPrice !== 0) {
        return (
            <div className="mx-auto space-y-5">
    
                {userReceipt.map((item) => (
                    <div key={item.id} className="flex justify-between min-w-[600px] text-xl px-3 pb-4 bg-white shadow-xl rounded-2xl overflow-hidden">
                        <div className="flex space-x-2 overflow-hidden">
                            <div className="size-36 overflow-hidden">
                                <img src={item.imgSrc} className="object-cover size-full" alt={item.title} />
                            </div>
                            <div className="self-end mb-4">
                                <p>x{item.quantity}</p>
                                <p>{item.title}</p>
                            </div>
                        </div>
                        <div className="self-end mb-4 text-Bred/80 pr-3">
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
    
                <br/>
                <hr />
                
                <div className="flex justify-between">
                    <div className="text-Bred text-3xl font-bold">
                        <p>${totalPrice}</p>
                    </div>
                    <div className="flex space-x-3 *:py-2.5 *:w-36 *:rounded-2xl">
                        <button className="bg-Bred text-white">Pay Online</button>
                        <button className="bg-white shadow-md border">Pay at Counter</button>
                    </div>
                </div>
    
            </div>
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
