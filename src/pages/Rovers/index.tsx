import React, { useState } from "react";
import { ButtonRover } from "../../components/ButtonRover";
import { LoadingScreen } from "../../components/LoadingScreen";
import { Container, Wallpaper } from "./styles";

export const Rovers: React.FunctionComponent = () => {
    const [loadingImage, setLoadingImage] = useState(true);

    const loadImage = () => {
        setLoadingImage(false);
    };

    return (
        <Container>
            <Wallpaper
                source={require("../../assets/wallpaperRovers.jpg")}
                onLoad={loadImage}
            >
                <ButtonRover
                    setLoadingImage={setLoadingImage}
                    nameRover="Curiosity"
                    source={require("../../assets/curiosity.png")}
                />

                <ButtonRover
                    setLoadingImage={setLoadingImage}
                    nameRover="Opportunity"
                    source={require("../../assets/opportunity.png")}
                />

                <ButtonRover
                    setLoadingImage={setLoadingImage}
                    nameRover="Spirit"
                    source={require("../../assets/spirit.png")}
                />
            </Wallpaper>
            {loadingImage && <LoadingScreen />}
        </Container>
    );
};
