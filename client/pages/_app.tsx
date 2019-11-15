import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Header from "../components/Header";
import "../public/nprogress.css";

import withData from "../lib/withData";

class FormalityApp extends App {

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
