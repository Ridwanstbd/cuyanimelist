import Link from "next/link";

const NavBar = () => {
    return (
        <header className="bg-red-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
            <Link href={"/"} className="font-bold text-2xl text-white" >ANIME LIST</Link>
            <input placeholder="Search .." className="" />
            </div>
        </header>
    )
};
export default NavBar