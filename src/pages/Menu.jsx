import { useState } from "react";
import MenuCard from "../components/MenuCard";
import Navbar from "../components/Navbar";
// import useMediaQuery from '../hooks/useMediaQuery';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Menu = () => {

    const initialMenuItems = [
        {
            "id": "1",
            "title": "Big Tasty™",
            "imgSrc": "./burgers/b1.jpeg",
            "price": "5",
            "category": "Special Burgers",
        },
        {
            "id": "2",
            "title": "Quarter Pounder with Cheese™",
            "imgSrc": "./burgers/b2.jpeg",
            "price": "2",
            "category": "Special Burgers",
        },
        {
            "id": "3",
            "title": "Big B",
            "imgSrc": "./burgers/b3.jpeg",
            "price": "5",
            "category": "Special Burgers",
        },
        {
            "id": "4",
            "title": "Beef Burger",
            "imgSrc": "./burgers/b4.jpeg",
            "price": "3",
            "category": "Small Burgers",
        },
        {
            "id": "5",
            "title": "Cheeseburger",
            "imgSrc": "./burgers/b5.jpeg",
            "price": "1",
            "category": "Small Burgers",
        },
        {
            "id": "6",
            "title": "Spicy BChicken™",
            "imgSrc": "./burgers/b6.jpeg",
            "price": "1",
            "category": "Small Burgers",
        },
        {
            "id": "7",
            "title": "Chicken B",
            "imgSrc": "./burgers/b7.jpeg",
            "price": "4",
            "category": "Large Burgers",
        },
        {
            "id": "8",
            "title": "Grand Chicken Spicy",
            "imgSrc": "./burgers/b8.jpeg",
            "price": "6",
            "category": "Large Burgers",
        },
        {
            "id": "9",
            "title": "Filet-O-Fish™",
            "imgSrc": "./burgers/b9.jpeg",
            "price": "3",
            "category": "Small Burgers",
        },
        {
            "id": "10",
            "title": "Chickenburger",
            "imgSrc": "./burgers/b10.jpeg",
            "price": "2",
            "category": "Large Burgers",
        },
        {
            "id": "11",
            "title": "Veggie Deluxe",
            "imgSrc": "./burgers/b11.jpeg",
            "price": "1",
            "category": "Large Burgers",
        },
        {
            "id": "12",
            "title": "Grand Chicken",
            "imgSrc": "./burgers/b12.jpeg",
            "price": "1",
            "category": "Large Burgers",
        },
        {
            "id": "13",
            "title": "Spicy Crunchy Chicken",
            "imgSrc": "./burgers/b13.jpeg",
            "price": "3",
            "category": "Large Burgers",
        },
        {
            "id": "14",
            "title": "Spicy Crunchy Beef",
            "imgSrc": "./burgers/b14.jpeg",
            "price": "2",
            "category": "Small Burgers",
        },
        {
            "id": "15",
            "title": "The Mushroom Beef",
            "imgSrc": "./burgers/b15.jpeg",
            "price": "4",
            "category": "Small Burgers",
        },
        {
            "id": "16",
            "title": "The Mushroom Chicken",
            "imgSrc": "./burgers/b16.jpeg",
            "price": "3",
            "category": "No meat Burgers",
        },
        {
            "id": "17",
            "title": "Grand Chicken Spicy Meal",
            "imgSrc": "./burgers/b17.jpeg",
            "price": "4",
            "category": "No meat Burgers",
        },
        {
            "id": "18",
            "title": "Chicken Tenders",
            "imgSrc": "./burgers/b18.jpeg",
            "price": "2",
            "category": "No meat Burgers",
        },
        {
            "id": "19",
            "title": "Chicken Snack Wrap Spicy",
            "imgSrc": "./burgers/b19.jpeg",
            "price": "2",
            "category": "No meat Burgers",
        },
        {
            "id": "20",
            "title": "Frutea Ice Tea Peach Flavor",
            "imgSrc": "./burgers/bv1.jpeg",
            "price": "0.5",
            "category": "Beverages",
        },
        {
            "id": "21",
            "title": "Minute Maid Apple Juice",
            "imgSrc": "./burgers/bv2.jpeg",
            "price": "0.5",
            "category": "Beverages",
        },
        {
            "id": "22",
            "title": "Coca-Cola™",
            "imgSrc": "./burgers/bv3.jpeg",
            "price": "0.5",
            "category": "Beverages",
        },
        {
            "id": "23",
            "title": "Sprite",
            "imgSrc": "./burgers/bv4.jpeg",
            "price": "0.5",
            "category": "Beverages",
        },
        {
            "id": "24",
            "title": "Fanta",
            "imgSrc": "./burgers/bv5.jpeg",
            "price": "0.5",
            "category": "Beverages",
        },
        {
            "id": "25",
            "title": "Minute Maid Orange Juice",
            "imgSrc": "./burgers/bv6.jpeg",
            "price": "0.5",
            "category": "Beverages",
        },
    ];

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