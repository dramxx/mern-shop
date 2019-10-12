import React from "react";
import App from "next/app";
import Layout from "../components/_App/Layout";

class MernApp extends App {

    static getInitialProps = async ( { Component, ctx } ) => {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps( ctx ) : {};
        return { pageProps };
    };

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Layout>
                <Component { ...pageProps }/>
            </Layout>
        );
    }
}

export default MernApp;
