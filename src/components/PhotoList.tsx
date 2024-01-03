import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { IImageData } from "../interface";
import { PhotoDetails } from "./PhotoDetails";

interface IProps {
    item: IImageData;
}

export const PhotoList: React.FunctionComponent<IProps> = ({ item }) => {
    const screenWidth = Dimensions.get("window").width;
    const itemWidth = screenWidth / 3.1;
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    const loadImage = () => {
        setLoading(false);
    };

    return (
        <Container
            style={{ width: itemWidth, height: itemWidth }}
            activeOpacity={0.9}
            onPress={() => setShow(true)}
        >
            {loading && <Loading size={"large"} />}
            <Photo
                style={{ display: loading ? "none" : "flex" }}
                source={{ uri: item.img_src }}
                onLoad={loadImage}
            />

            {<PhotoDetails show={show} item={item} setShow={setShow} />}
        </Container>
    );
};

const Container = styled.TouchableOpacity`
    margin: 2px;
    align-items: center;
    justify-content: center;
`;

const Photo = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 4px;
`;

const Loading = styled.ActivityIndicator`
    flex: 1;
`;
