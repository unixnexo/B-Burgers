import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useEffect, useState } from "react";

const MainLayout = ({ initialMenuItems, setMenuItems, totalPrice }) => {
    const [animationParent] = useAutoAnimate();
    const [hasScrolled100, setHasScrolled100] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHasScrolled100(true);
            } else {
                setHasScrolled100(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header />

            <main>
                <div className="flex lg:flex-row flex-col lg:p-2 pt-8 pb-20" ref={animationParent}>

                    {/* sidebar */}
                    <div className={`lg:border-2 rounded-lg lg:ml-2 h-min z-50 bg-white sticky top-0 pb-3 lg:pb-0 lg:top-3 mb-16 lg:mb-0 flex justify-center ${hasScrolled100 ? 'shadow-md' : null} lg:shadow-none`}>
                        <Navbar setMenuItems={setMenuItems} initialMenuItems={initialMenuItems} totalPrice={totalPrice} />
                    </div>

                    {/* main content */}
                    <Outlet />

                </div>
            </main>
        </>
    );
}
 
export default MainLayout;