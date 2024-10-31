import { Link } from "react-router-dom";

const NavbarItem = ({ title, imgSrc, isActive, onClick, notCategory, route }) => {

    return (
        <div>
            <Link to={route}>
                <div onClick={onClick} className="flex shrink-0 flex-col lg:flex-row justify-center lg:justify-start items-center lg:space-x-2 mx-3 lg:mx-0 cursor-pointer lg:hover:scale-105 transition-all">
                    <div className={`size-20 grow lg:grow-0 overflow-hidden lg:rounded lg:border-t-0 border-Bred lg:pl-4 lg:py-2 transition-all duration-100 ${isActive ? 'lg:border-l-4 border-t-2' : 'border-0'}`}>
                        {imgSrc ? <img src={imgSrc} className="w-full object-cover" alt="burgers" /> : <div className="flex justify-center items-center size-[80px] text-2xl text-Bred">0$</div>}
                    </div>
                    <div className="lg:pr-4 text-sm lg:text-base">
                        <p>{title}</p>
                    </div>
                </div>
                {notCategory && <hr className="w-3/4 mx-auto hidden lg:block" />}
            </Link>
        </div>
    );
}
 
export default NavbarItem;

