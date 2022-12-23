import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {number} from "prop-types";
import {Layout} from "@components";

export default function App({Component, pageProps}: AppProps) {
    const statusCode = pageProps.statusCode;
    return (

        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
