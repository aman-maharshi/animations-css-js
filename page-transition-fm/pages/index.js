import { motion as m } from "framer-motion"

const Home = () => {
    return (
        <div className="text-gray-900 bg-orange-200 absolute left-0 top-0 h-screen w-screen p-12 lg:px-36">
            <main>
                <div className="my-64 p-1">
                    <h1 className="text-4xl text-center lg:text-right lg:text-6xl font-qsSemiBold">
                        Aman Maharshi
                    </h1>
                </div>
                <div className="flex justify-between text-lg">
                    <div>
                        <h2>JavaScript (ES6+)</h2>
                        <h2>React</h2>
                        <h2>Next.js</h2>
                    </div>
                    <div className="w-40 md:w-64">
                        Frontend developer who enjoys crafting responsive,
                        efficient and interactive web applications.
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
