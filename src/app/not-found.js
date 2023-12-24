"use client"
import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center">
            <div className="flex flex-col justify-center items-center gap-4">
                <FileSearch size={44} className="text-color-accent"/>
                <h1 className="text-color-accent text-4xl font-bold">NOT FOUND</h1>
                <Link href="/" className="text-color-primary hover:text-color-accent underline transition-all" >Kembali</Link>
            </div>
        </div>
    )
}
export default Page;