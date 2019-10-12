import React from "react";
import App from "next/app";
import Layout from "../components/_App/Layout";

class MernApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <Layout>
                <Component/>
            </Layout>
        );
    }
}

export default MernApp;
