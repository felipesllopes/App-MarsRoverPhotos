import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context";
import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";

const App: React.FunctionComponent = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <ThemeProvider theme={theme}>
                    <Routes />
                    <StatusBar />
                </ThemeProvider>
            </NavigationContainer>
        </AuthProvider>
    );
};

export default App;
