import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-20 space-y-4">
            <img className="size-[90%] sm:size-[70%] md:size-[50%] rounded-xl" src="./The_Krusty_Krab.png" alt="funny picture" />
            <h1 className="text-base sm:text-xl md:text-3xl">Wrong turn! Go back to <Link to={'/'} className="text-Bred font-bold underline underline-offset-8">Menu</Link></h1>
        </div>
    );
}
 
export default NotFound;