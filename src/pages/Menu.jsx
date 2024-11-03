import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import useUniqueId from '../hooks/useUniqueId';

const Menu = ({ menuItems, userReceipt, setUserReceipt, SetTotalPrice }) => {

    const [animationParent] = useAutoAnimate();
    const generateUniqueId = useUniqueId();

    const handleClick = ({title, price, imgSrc}) => {
        price = Number(price);

        SetTotalPrice(prev => {
            return prev + price;
        });

        setUserReceipt(prev => {
            const existingItem = prev.findIndex(item => item.title === title);

            if (existingItem !== -1) {
                const updatedReceipts = [...prev];
                updatedReceipts[existingItem] = {
                    ...updatedReceipts[existingItem],
                    quantity: updatedReceipts[existingItem].quantity + 1,
                    price: updatedReceipts[existingItem].price + price 
                };
                return updatedReceipts;
            } else {
                return [
                    ...prev,
                    { id: generateUniqueId(), title, price, imgSrc, quantity: 1 }
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