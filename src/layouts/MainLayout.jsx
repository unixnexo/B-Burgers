import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const MainLayout = ({ initialMenuItems, setMenuItems }) => {

    return (
        <>
            <Header />

            <main>
                <div className="flex lg:flex-row flex-col p-2 pt-8 pb-20">

                    {/* sidebar */}
                    <div className="lg:border-2 rounded-lg ml-2 h-min lg:sticky top-3 mb-16 lg:mb-0 flex justify-center">
                        <Navbar setMenuItems={setMenuItems} initialMenuItems={initialMenuItems} />
                    </div>

                    {/* main content */}
                    <Outlet />

                </div>
            </main>
        </>
    );
}
 
export default MainLayout;