const MenuCard = ({ imgSrc, title, price }) => {
    return (
        <div className="flex flex-col items-center justify-start relative hover:scale-105 transition-all cursor-pointer">
            <div className="size-52 overflow-hidden">
                <img src={imgSrc} className="size-full object-cover" alt="burger" />
            </div>
            <p>{title}</p>
            <div className="flex items-center justify-center absolute right-5 top-10 rotate-12 size-12 text-xl rounded-full text-white bg-Bred">
                ${price}
            </div>
        </div>
    );
}
 
export default MenuCard;