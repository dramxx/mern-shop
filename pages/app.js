import React from "react";
import App from "next/app";

class MernApp extends App {
    render() {
        const { Component } = this.props;
        return <Component/>;
    }
}

export default MernApp;
