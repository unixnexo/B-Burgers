import { useState } from "react";
import MenuCard from "../components/MenuCard";
import Navbar from "../components/Navbar";
// import useMediaQuery from '../hooks/useMediaQuery';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Menu = ({ initialMenuItems }) => {

    const [menuItems, setMenuItems] = useState(initialMenuItems);

    // const mdScreen = useMediaQuery('(max-width: 1024px)');
    // const lgScreen = useMediaQuery('(min-width: 1024px)');

    const [animationParent] = useAutoAnimate();

    return (
        <main>

            <div className="flex lg:flex-row flex-col p-2 pt-10 pb-20">

                {/* sidebar wrapper */}
                <div className="lg:border-2 rounded-lg ml-2 h-min lg:sticky top-3 mb-16 lg:mb-0 flex justify-center">
                    <Navbar setMenuItems={setMenuItems} initialMenuItems={initialMenuItems} />
                </div>

                {/* menu items wrapper */}
                <div className="grow grid grid-cols-2 sm:grid-cols-3 gap-y-24" ref={animationParent}>
                    {menuItems.map((item) => (
                        <MenuCard imgSrc={item.imgSrc} title={item.title} price={item.price} category={item.category} key={item.id} />
                    ))}
                </div>

            </div>

        </main>
    );
}
 
export default Menu;