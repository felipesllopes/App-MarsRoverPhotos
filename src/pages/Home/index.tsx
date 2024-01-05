import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { LoadingScreen } from "../../components/LoadingScreen";
import {
    Button,
    Container,
    TextButton,
    Title,
    ViewButton,
    Wallpaper,
} from "./styles";

interface INavigation {
    navigate: (screen: string, params?: { screen: string }) => void;
}

export const Home: React.FunctionComponent = () => {
    const { navigate } = useNavigation<INavigation>();
    const [loading, setLoading] = useState(true);

    const loadImage = () => {
        setLoading(false);
    };

    const handleNavigation = () => {
        navigate("Botton", {
            screen: "ImageRover",
        });
    };

    return (
        <Container>
            <Wallpaper
                source={require("../../assets/wallpaperHome.jpg")}
                onLoad={loadImage}
            >
                <Title>Mars Rover Photos</Title>

                <ViewButton>
                    <Button onPress={handleNavigation} activeOpacity={0.8}>
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
