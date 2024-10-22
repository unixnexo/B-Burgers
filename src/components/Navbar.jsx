import { useState } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = ({ setMenuItems, initialMenuItems }) => {

    const navbarItems = [
        {
            "id": 1,
            "title": "View All",
            "imgSrc": "./burgers/m0.jpeg",
        },
        {
            "id": 2,
            "title": "Special Burgers",
            "imgSrc": "./burgers/m1.jpeg",
        },
        {
            "id": 3,
            "title": "Small Burgers",
            "imgSrc": "./burgers/m2.jpeg",
        },
        {
            "id": 4,
            "title": "Large Burgers",
            "imgSrc": "./burgers/m3.jpeg",
        },
        {
            "id": 5,
            "title": "No meat Burgers",
            "imgSrc": "./burgers/m4.jpeg",
        },
        {
            "id": 6,
            "title": "Beverages",
            "imgSrc": "./burgers/m5.jpeg",
        },
    ];

    const [activeTitle, setActiveTitle] = useState(null);

    const handleClick = (clickedTitle) => {
        if (clickedTitle === 'View All') {
            setMenuItems(initialMenuItems);
        } else {
            setMenuItems(initialMenuItems.filter((item) => item.category === clickedTitle));
        }
        setActiveTitle(clickedTitle);
    };

    return (
        <nav className="space-y-2 flex justify-center lg:block overflow-auto lg:overflow-hidden">
            {navbarItems.map((item) => (
                <NavbarItem 
                    title={item.title} 
                    imgSrc={item.imgSrc} 
                    key={item.id}  
                    isActive={activeTitle === item.title}
                    onClick={() => handleClick(item.title)}
                />
            ))}
        </nav>
    );
}
 
export default Navbar;