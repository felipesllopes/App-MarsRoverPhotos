import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";

const App: React.FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Routes />
            <StatusBar />
        </NavigationContainer>
    );
};

export default App;

