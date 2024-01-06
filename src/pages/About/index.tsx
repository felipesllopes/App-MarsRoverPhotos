import React, { useContext, useState } from "react";
import { ModalLoading } from "../../components/ModalLoading";
import { AuthContext } from "../../context";
import { Container, RoverPhoto, Screen, Text, Wallpaper } from "./styles";

export const About: React.FunctionComponent = () => {
    const { contextRoverData } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const loadImage = () => {
        setLoading(false);
    };

    return (
        <Container>
            <Wallpaper source={require("../../assets/wallpaperImages.png")}>
                <Screen>
                    <RoverPhoto
                        source={
                            contextRoverData.name == "Curiosity"
                                ? require("../../assets/curiosity.png")
                                : require("../../assets/spirit.png")
                        }
                        onLoad={loadImage}
                        resizeMode="contain"
                    />
                    <Text>Rover: {contextRoverData.name}</Text>
                    <Text>
                        Lançamento:{" "}
                        {new Date(
                            contextRoverData.launch_date,
                        ).toLocaleDateString()}
                    </Text>
                    <Text>
                        Pouso:{" "}
                        {new Date(
                            contextRoverData.landing_date,
                        ).toLocaleDateString()}
                    </Text>
                    <Text>
                        Últimos dados:{" "}
                        {new Date(
                            contextRoverData.max_date,
                        ).toLocaleDateString()}
                    </Text>
                    <Text>
                        Total de fotos:{" "}
                        {contextRoverData.total_photos.toLocaleString("pt-BR")}
                    </Text>
                    <Text>
                        Missão:{" "}
                        {contextRoverData.status == "active"
                            ? `ativa`
                            : `encerrada`}
                    </Text>
                </Screen>
            </Wallpaper>
            {loading && <ModalLoading />}
        </Container>
    );
};
