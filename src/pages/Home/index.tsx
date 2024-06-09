import {
    Signika_300Light,
    Signika_700Bold,
    useFonts,
} from "@expo-google-fonts/signika";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
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
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);

    const [fontLoaded] = useFonts({
        Signika_700Bold,
        Signika_300Light,
    });

    const loadImage = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        if (fontLoaded && imageLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontLoaded, imageLoaded]);

    if (!fontLoaded) {
        return null;
    }

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
                <Title style={{ fontFamily: "Signika_700Bold" }}>
                    Mars Rover Photos
                </Title>

                <ViewButton>
                    <Button onPress={handleNavigation} activeOpacity={0.8}>
                        <TextButton style={{ fontFamily: "Signika_300Light" }}>
                            Rovers
                        </TextButton>
                    </Button>

                    <Button
                        onPress={() => navigate("Galery")}
                        activeOpacity={0.8}
                    >
                        <TextButton style={{ fontFamily: "Signika_300Light" }}>
                            Galeria
                        </TextButton>
                    </Button>
                </ViewButton>
            </Wallpaper>
        </Container>
    );
};
