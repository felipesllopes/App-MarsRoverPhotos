import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import { IImageData } from "../interface";

interface IProps {
    show: boolean;
    setShow: (value: boolean) => void;
    item: IImageData;
}

export const PhotoDetails: React.FunctionComponent<IProps> = ({
    show,
    setShow,
    item,
}) => {
    return (
        <Modal transparent={true} animationType="fade" visible={show}>
            <IconCancel name="close" onPress={() => setShow(false)} />
            <Screen>
                <Container>
                    <Photo
                        source={{ uri: item?.img_src }}
                        resizeMode="contain"
                    />

                    <ViewText>
                        <Text>Rover: {item?.rover?.name}</Text>
                        <Text>
                            Câmera: {item?.camera?.full_name} (
                            {item?.camera?.name})
                        </Text>
                        <Text>Data Terrestre: {item?.earth_date}</Text>
                        <Text>Sol Marciano: {item?.sol}</Text>
                    </ViewText>

                    <ViewIcons>
                        <Icon name="bookmark" />
                        <Icon name="download-outline" />
                        <Icon name="share-social" />
                    </ViewIcons>
                </Container>
            </Screen>
        </Modal>
    );
};

const Screen = styled.View`
    flex: 1;
    background-color: rgba(90, 90, 90, 0.8);
    align-items: center;
    justify-content: center;
`;

const Container = styled.View`
    background-color: #fff;
    border-width: 2px;
    width: 70%;
`;

const IconCancel = styled(Ionicons)`
    font-size: 30px;
    position: absolute;
    z-index: 2;
    padding: 3px;
    background-color: #ddd;
    margin: 60px;
    border-radius: 40px;
`;

const Photo = styled.Image`
    width: 100%;
    aspect-ratio: 1;
`;

const ViewText = styled.View`
    margin: 10px 4px;
`;

const Text = styled.Text`
    font-size: 16px;
    /* text-align: center; */
`;

const ViewIcons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Icon = styled(Ionicons)`
    font-size: 25px;
    padding: 10px;
`;
