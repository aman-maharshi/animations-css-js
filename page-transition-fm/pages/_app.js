import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Page Transition with Framer Motion</title>
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
