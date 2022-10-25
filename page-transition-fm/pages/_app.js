import "../styles/globals.css"
import Head from "next/head"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
    return (
        <div className="font-qsRegular">
            <Head>
                <title>Page Transition with Framer Motion</title>
                <meta
                    name="description"
                    content="Page Transition in React/Next.js using Framer Motion"
                />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
