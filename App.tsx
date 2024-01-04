import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/idex";

const App: React.FunctionComponent = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Routes />
                <StatusBar />
            </NavigationContainer>
        </AuthProvider>
    );
};

export default App;
