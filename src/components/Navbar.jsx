import { useState } from "react";
import NavbarItem from "./NavbarItem";
import { useLocation } from "react-router-dom";

const Navbar = ({ setMenuItems, initialMenuItems }) => {

    const navbarItems = [
        {
            "id": 7,
            "title": "Receipt",
            "imgSrc": "",
            "notCategory": true,
            "route": "/receipt",
        },
        {
            "id": 1,
            "title": "View All",
            "imgSrc": "./burgers/m0.jpeg",
            "notCategory": false,
            "route": "/",
        },
        {
            "id": 2,
            "title": "Special Burgers",
            "imgSrc": "./burgers/m1.jpeg",
            "notCategory": false,
            "route": "/",
        },
        {
            "id": 3,
            "title": "Small Burgers",
            "imgSrc": "./burgers/m2.jpeg",
            "notCategory": false,
            "route": "/",
        },
        {
            "id": 4,
            "title": "Large Burgers",
            "imgSrc": "./burgers/m3.jpeg",
            "notCategory": false,
            "route": "/",
        },
        {
            "id": 5,
            "title": "No meat Burgers",
            "imgSrc": "./burgers/m4.jpeg",
            "notCategory": false,
            "route": "/",
        },
        {
            "id": 6,
            "title": "Beverages",
            "imgSrc": "./burgers/m5.jpeg",
            "notCategory": false,
            "route": "/",
        },
    ];

    const location = useLocation();
    const getInitialTitle = () => {
        switch (location.pathname) {
          case "/":
            return "View All";
          case "/receipt":
            return "Receipt";
          default:
            return "";
        }
    };

    const [activeTitle, setActiveTitle] = useState(getInitialTitle);

    const handleClick = (clickedTitle) => {
        if (clickedTitle === 'View All') {
            setMenuItems(initialMenuItems);
        } else {
            setMenuItems(initialMenuItems.filter((item) => item.category === clickedTitle));
        }
        setActiveTitle(clickedTitle);
    };

    return (
        <nav className="space-y-2 flex justify-start lg:block overflow-auto lg:overflow-visible scrollbar-hide cursor-col-resize whitespace-nowrap">
            {navbarItems.map((item) => (
                <NavbarItem 
                    title={item.title} 
                    imgSrc={item.imgSrc} 
                    key={item.id}
                    notCategory={item.notCategory}
                    route={item.route}
                    isActive={activeTitle === item.title}
                    onClick={() => handleClick(item.title)}
                />
            ))}
        </nav>
    );
}
 
export default Navbar;