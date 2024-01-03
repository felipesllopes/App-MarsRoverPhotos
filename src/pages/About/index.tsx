import React from "react";
import { Container, Screen, Wallpaper } from "./styles";

export const About: React.FunctionComponent = () => {
    return (
        <Container>
            <Wallpaper source={require("../../assets/wallpaperImages.png")}>
                <Screen></Screen>
            </Wallpaper>
        </Container>
    );
};
