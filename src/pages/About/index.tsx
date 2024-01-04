import React, { useState } from "react";
import { Container, RoverPhoto, Screen, Text, Wallpaper } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../context/idex";
import { ModalLoading } from "../../components/ModalLoading";

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
                    <Text>Lançamento: {contextRoverData.launch_date}</Text>
                    <Text>Pouso: {contextRoverData.landing_date}</Text>
                    <Text>Últimos dados: {contextRoverData.max_date}</Text>
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
