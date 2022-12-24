import type {AppProps} from 'next/app'
import {Layout} from "@components";
import {ThemeProvider} from "styled-components";
import {theme} from "../styled-components/theme";
import GlobalStyle from "../styled-components/global";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>

    )
}
