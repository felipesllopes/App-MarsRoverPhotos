import React from "react";
import {
    Button,
    Container,
    TextButton,
    Title,
    ViewButton,
    Wallpaper,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IScreenNavigation } from "../../interface";

export const Home: React.FunctionComponent = () => {
    const { navigate } = useNavigation<IScreenNavigation>();

    return (
        <Container>
            <Wallpaper source={require("../../assets/wallpaperHome.jpg")}>
                <Title>Mars Rover Photos</Title>

                <ViewButton>
                    <Button onPress={() => navigate("Rovers")}>
                        <TextButton>Rovers</TextButton>
                    </Button>

                    <Button onPress={() => navigate("Galery")}>
                        <TextButton>Galeria</TextButton>
                    </Button>
                </ViewButton>
            </Wallpaper>
        </Container>
    );
};
