import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { LoadingScreen } from "../../components/LoadingScreen";
import { IScreenNavigation } from "../../interface";
import {
    Button,
    Container,
    TextButton,
    Title,
    ViewButton,
    Wallpaper,
} from "./styles";

export const Home: React.FunctionComponent = () => {
    const { navigate } = useNavigation<IScreenNavigation>();
    const [loading, setLoading] = useState(true);

    const loadImage = () => {
        setLoading(false);
    };

    return (
        <Container>
            <Wallpaper
                source={require("../../assets/wallpaperHome.jpg")}
                onLoad={loadImage}
            >
                <Title>Mars Rover Photos</Title>

                <ViewButton>
                    <Button
                        onPress={() => navigate("Rovers")}
                        activeOpacity={0.8}
                    >
                        <TextButton>Rovers</TextButton>
                    </Button>

                    <Button
                        onPress={() => navigate("Galery")}
                        activeOpacity={0.8}
                    >
                        <TextButton>Galeria</TextButton>
                    </Button>
                </ViewButton>
            </Wallpaper>
            {loading && <LoadingScreen />}
        </Container>
    );
};
