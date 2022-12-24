import React from 'react';
import Document, { DocumentContext, Html, Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps (ctx: DocumentContext): Promise<{
        styles: Array<React.ReactFragment | JSX.Element | undefined>;
        html: string;
        head?: any;
    }> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()]
            };
        } finally {
            sheet.seal();
        }
    }

    render (): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    {/*<link*/}
                    {/*    rel="preload"*/}
                    {/*    href="/fonts/Montserrat/static/Montserrat-Regular.ttf"*/}
                    {/*    as="font"*/}
                    {/*    type="font/ttf"*/}
                    {/*    crossOrigin="anonymous"*/}
                    {/*/>*/}
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
