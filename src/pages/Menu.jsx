import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import Navbar from "../components/Navbar";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import useUniqueId from '../hooks/useUniqueId';

const Menu = ({ initialMenuItems, userReceipt, setUserReceipt }) => {

    const [menuItems, setMenuItems] = useState(initialMenuItems);

    const [animationParent] = useAutoAnimate();

    const generateUniqueId = useUniqueId();

    const handleClick = (title) => {
        setUserReceipt(prev => {
            const existingItem = prev.findIndex(item => item.title === title);

            if (existingItem !== -1) {
                const updatedReceipts = [...prev];
                updatedReceipts[existingItem] = {
                    ...updatedReceipts[existingItem],
                    quantity: updatedReceipts[existingItem].quantity + 1
                };
                return updatedReceipts;
            } else {
                return [
                    ...prev,
                    { id: generateUniqueId(), title, quantity: 1 }
                ];
            }

        });
    };

    useEffect(() => {
        console.log(userReceipt);
    }, [userReceipt]);

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
                        <MenuCard imgSrc={item.imgSrc} title={item.title} price={item.price} category={item.category} key={item.id} handleClick={handleClick} />
                    ))}
                </div>

            </div>

        </main>
    );
}
 
export default Menu;