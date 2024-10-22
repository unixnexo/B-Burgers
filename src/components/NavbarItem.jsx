const NavbarItem = ({ title, imgSrc, isActive, onClick }) => {

    return ( 
        <div onClick={onClick} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all">
            <div className={`size-20 overflow-hidden rounded border-Bred pl-4 py-2 ${isActive ? 'border-l-4' : 'border-l-0'}`}>
                <img src={imgSrc} className="w-full object-cover" alt="burgers" />
            </div>
            <div className="pr-4">
                <p>{title}</p>
            </div>
        </div>
    );
}
 
export default NavbarItem;
