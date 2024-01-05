import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import theme from "../global/styles/theme";
import { About } from "../pages/About";
import { Galery } from "../pages/Galery";
import { Home } from "../pages/Home";
import { ImageRover } from "../pages/ImageRover";

export const Botton: React.FunctionComponent = () => {
    const Botton = createBottomTabNavigator();

    return (
        <Botton.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor: "#999",
                headerShown: false,
            }}
        >
            <Botton.Screen
                name="ImageRover"
                component={ImageRover}
                options={{
                    title: "Fotos",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="camera" color={color} size={30} />
                    ),
                }}
            />
            <Botton.Screen
                name="About"
                component={About}
                options={{
                    title: "Sobre",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="information-circle"
                            color={color}
                            size={30}
                        />
                    ),
                }}
            />
        </Botton.Navigator>
    );
};

export const Routes: React.FunctionComponent = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                animation: "slide_from_right",
                headerTintColor: theme.colors.white,
                headerStyle: { backgroundColor: theme.colors.black },
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Botton"
                component={Botton}
                options={{ title: "Voltar" }}
            />

            <Stack.Screen
                name="Galery"
                component={Galery}
                options={{ title: "Galeria" }}
            />
        </Stack.Navigator>
    );
};
