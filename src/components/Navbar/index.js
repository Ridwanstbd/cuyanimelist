import Link from "next/link";
import InputSearch from "./InputSearch";

const NavBar = () => {
    return (
        <header className="bg-red-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
            <Link href={"/"} className="font-bold text-2xl text-white" >ANIME LIST</Link>
            <InputSearch />
            </div>
        </header>
    )
};
export default NavBar