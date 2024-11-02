const Receipt = ({ userReceipt }) => {
    return (
        <>
        {userReceipt.map((item) => (
            <div key={item.id}>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.quantity}</p>
                <p>{item.price}$</p>
                <p>{item.imgSrc}</p>
            </div>
        ))}
        </>
    );
}
 
export default Receipt;