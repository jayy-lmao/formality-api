import App, { Container } from "next/app";
import Header from "../components/Header";

class formalityApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default formalityApp;
