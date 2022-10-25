import React from "react"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="p-12 lg:px-36 text-2xl relative z-20">
            <ul className="flex gap-12 cursor-pointer">
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
