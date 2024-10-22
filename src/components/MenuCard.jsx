const MenuCard = ({ imgSrc, title, price }) => {
    return (
        <div className="flex flex-col items-center justify-start relative lg:hover:scale-105 transition-all cursor-pointer">
            <div className="max-w-52 max-h-52 overflow-hidden">
                <img src={imgSrc} className="size-full object-cover" alt="burger" />
            </div>
            <p className="text-center">{title}</p>
            <div className="flex items-center justify-center absolute right-5 top-0 md:top-10 rotate-12 size-10 sm:size-12 text-lg sm:text-xl rounded-full text-white bg-Bred">
                ${price}
            </div>
        </div>
    );
}
 
export default MenuCard;