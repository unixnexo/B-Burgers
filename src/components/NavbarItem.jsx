const NavbarItem = ({ title, imgSrc, setMenuItems, initialMenuItems }) => {

    const handleClick = (clickedTitle) => {
        if (clickedTitle === 'View All') {
            setMenuItems(initialMenuItems);
        } else {
            setMenuItems(initialMenuItems.filter((item) => item.category === clickedTitle));
        }  
    };


    return ( 
        <div onClick={() => handleClick(title)} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all">
            <div className="size-20 overflow-hidden rounded border-Bred pl-4 py-2"> {/* border-l-4 */}
                <img src={imgSrc} className="w-full object-cover" alt="burgers" />
            </div>
            <div className="pr-4">
                <p>{title}</p>
            </div>
        </div>
    );
}
 
export default NavbarItem;



// else if (clickedTitle === 'Small Burgers') {
        //     setMenuItems(initialMenuItems.filter((item) => item.category === 'Small Burgers'));
        // }
// else if (title === 'Small Burgers') {
//     console.log('Small Burgers');
// } else if (title === 'Larger Burgers') {
//     console.log('Larger Burgers');
// } else if (title === 'No meat Burgers') {
//     console.log('No meat Burgers');
// } else if (title === 'Beverages') {
//     console.log('Beverages');
// }