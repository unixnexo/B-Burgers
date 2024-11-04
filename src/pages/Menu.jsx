import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import useUniqueId from '../hooks/useUniqueId';

const Menu = ({ menuItems, userReceipt, setUserReceipt, SetTotalPrice }) => {

    const [animationParent] = useAutoAnimate();
    const generateUniqueId = useUniqueId();

    const handleClick = ({title, price, imgSrc}) => {
        price = Number(price);

        SetTotalPrice(prev =>  prev + price);

        setUserReceipt(prev => {
            const existingItemIndex = prev.findIndex(item => item.title === title);

            if (existingItemIndex !== -1) {
                const updatedReceipts = [...prev];
                const existingItem = updatedReceipts[existingItemIndex];

                updatedReceipts[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                    totalPrice: existingItem.price * (existingItem.quantity + 1)
                };

                return updatedReceipts;
            } else {
                return [
                    ...prev,
                    { id: generateUniqueId(), title, price, imgSrc, quantity: 1, totalPrice: price }
                ];
            }

        });
    };

    useEffect(() => {
        console.log(userReceipt);
    }, [userReceipt]);

    return (
        <div className="grow grid grid-cols-2 sm:grid-cols-3 gap-y-24" ref={animationParent}>
            {menuItems.map((item) => (
                <MenuCard imgSrc={item.imgSrc} title={item.title} price={item.price} category={item.category} key={item.id} handleClick={handleClick} />
            ))} 
        </div>
    );
}
 
export default Menu;