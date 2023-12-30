import React from "react";
import { Button, Container, ImageRover, RoverName, Wallpaper } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IScreenNavigation } from "../../interface";
import { ButtonRover } from "../../components/ButtonRover";

export const Rovers: React.FunctionComponent = () => {
    const { navigate } = useNavigation<IScreenNavigation>();

    return (
        <Container>
            <Wallpaper source={require("../../assets/wallpaperRovers.jpg")}>
                <ButtonRover
                    nameRover="Curiosity"
                    source={require("../../assets/curiosity.png")}
                />

                <ButtonRover
                    nameRover="Opportunity"
                    source={require("../../assets/opportunity.png")}
                />

                <ButtonRover
                    nameRover="Spirit"
                    source={require("../../assets/spirit.png")}
                />
            </Wallpaper>
        </Container>
    );
};
