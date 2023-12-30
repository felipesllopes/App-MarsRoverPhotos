import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Galery } from "../pages/Galery";
import { Home } from "../pages/Home";
import { Rovers } from "../pages/Rovers";
import { ImageRover } from "../pages/ImageRover";

export const Routes: React.FunctionComponent = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                animation: "slide_from_right",
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: "#000" },
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="Rovers" component={Rovers} />

            <Stack.Screen
                name="Galery"
                component={Galery}
                options={{ title: "Galeria" }}
            />

            <Stack.Screen
                name="ImageRover"
                component={ImageRover}
                options={{ title: "Imagem" }}
            />
        </Stack.Navigator>
    );
};
