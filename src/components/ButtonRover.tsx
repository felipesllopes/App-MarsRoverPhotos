import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import { IScreenNavigationProps } from "../interface";

interface IProps {
    nameRover: string;
    source: ImageSourcePropType;
    setLoadingImage: (value: React.SetStateAction<boolean>) => void;
}

export const ButtonRover: React.FunctionComponent<IProps> = ({
    nameRover,
    source,
    setLoadingImage,
}) => {
    const { navigate } = useNavigation<IScreenNavigationProps>();

    const loadImage = () => {
        setLoadingImage(false);
    };

    return (
        <Button
            activeOpacity={0.8}
            onPress={() => navigate("ImageRover", nameRover)}
        >
            <RoverName>{nameRover}</RoverName>
            <ImageRover
                source={source}
                resizeMode="contain"
                onLoad={loadImage}
            />
        </Button>
    );
};

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    background-color: rgba(190, 190, 190, 0.5);
    margin: 5px;
    border-width: 2px;
    border-radius: 10px;
`;

export const RoverName = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;

export const ImageRover = styled.Image`
    height: 90%;
    width: 50%;
`;
