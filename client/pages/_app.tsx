import App, { Container } from "next/app";
import Header from "../components/Header";
import { ApolloProvider, Context } from "react-apollo";
import withData from "../lib/withData";
import React, { Component } from "react";


class formalityApp extends App {
    static async getInitialProps({ Component, ctx}: {Component: Component, ctx: Context}) {
        let pageProps = {};
        if ((Component as any).getInitialProps) {
            pageProps = await (Component as any).getInitialProps(ctx);
        }
        (pageProps as any).query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component, pageProps, apollo } = this.props;
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

export default formalityApp;
