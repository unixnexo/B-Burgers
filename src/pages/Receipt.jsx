const Receipt = ({ userReceipt, totalPrice }) => {
    return (
        <div className="mx-auto space-y-5">
            {userReceipt.map((item) => (
                <div key={item.id} className="flex justify-between min-w-[600px] text-xl px-3 pb-4 bg-white shadow-xl rounded-xl overflow-hidden">
                    <div className="flex space-x-2 overflow-hidden">
                        <div className="size-36 overflow-hidden">
                            <img src={item.imgSrc} className="object-cover size-full" alt={item.title} />
                        </div>
                        <div className="self-end mb-4">
                            <p>x{item.quantity}</p>
                            <p>{item.title}</p>
                        </div>
                    </div>
                    <div className="self-end mb-4 text-Bred/80">
                        <p>{item.price}$</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Receipt;
