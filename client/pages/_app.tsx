import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Header from "../components/Header";

import withData from "../lib/withData";

class FormalityApp extends App {
    // public static async getInitialProps({ Component, ctx}: {Component: Component, ctx: Context}) {
    //     let pageProps = {};
    //     if ((Component as any).getInitialProps) {
    //         pageProps = await (Component as any).getInitialProps(ctx);
    //     }
    //     (pageProps as any).query = ctx.query;
    //     return { pageProps };
    // }

    public render() {
        const { Component, pageProps, apollo } = (this.props as any);
        return (
            <div>
                <ApolloProvider client={apollo}>
                    <Header />
                    <Component {...pageProps} />
                </ApolloProvider>
            </div>
        );
    }
}

export default withData(FormalityApp);
