import { motion as m } from "framer-motion"

const Contact = () => {
    return (
        <div className="text-gray-900 bg-red-300 absolute left-0 top-0 h-screen w-screen p-12 lg:px-36">
            <main>
                <div className="my-64 p-1">
                    <h1 className="text-4xl text-center lg:text-right lg:text-6xl font-qsSemiBold">
                        Get in Touch
                    </h1>
                </div>
                <div className="flex justify-between text-lg lg:text-xl">
                    <div>
                        <h4>Frontend Engineer</h4>
                    </div>
                    <div className="underline">
                        <ul className="cursor-pointer">
                            <li className="mb-2">GitHub</li>
                            <li className="mb-2">LinkedIn</li>
                            <li className="mb-2">Codepen</li>
                            <li className="mb-2">YouTube</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact
