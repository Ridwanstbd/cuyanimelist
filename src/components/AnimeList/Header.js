import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <Link
                href={linkHref}
                className="md:text-xl text-md underline font-bold text-red-500 transition-all"
            >
                {linkTitle}
            </Link>
        </div>
    );
};
export default Header;
