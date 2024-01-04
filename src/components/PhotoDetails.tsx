import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import theme from "../global/styles/theme";
import { IImageData } from "../interface";
import { functionShared } from "../functions/functionShared";
import { functionDownload } from "../functions/functionDownload";

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
    const handleShared = async () => {
        await functionShared(item.img_src);
    };

    const handleDownload = async () => {
        await functionDownload(item.img_src, item.rover.name);
    };

    return (
        <Modal transparent={true} animationType="fade" visible={show}>
            <ButtonCancel>
                <IconCancel name="close" onPress={() => setShow(false)} />
            </ButtonCancel>

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
                        <Text>Id: {item?.id}</Text>
                    </ViewText>

                    <ViewIcons>
                        <Button>
                            <Icon name="bookmark-outline" />
                        </Button>
                        <Button onPress={handleDownload}>
                            <Icon name="download" />
                        </Button>
                        <Button onPress={handleShared}>
                            <Icon name="share-social" />
                        </Button>
                    </ViewIcons>
                </Container>
            </Screen>
        </Modal>
    );
};

const Screen = styled.View`
    flex: 1;
    background-color: rgba(50, 50, 50, 0.9);
    align-items: center;
    justify-content: center;
`;

const Container = styled.View`
    background-color: ${theme.colors.white};
    border-width: 2px;
    width: 70%;
`;

const ButtonCancel = styled.TouchableOpacity`
    position: absolute;
    z-index: 1;
    padding: 3px;
    background-color: ${theme.colors.gray};
    margin: 60px;
    border-radius: 40px;
`;

const IconCancel = styled(Ionicons)`
    font-size: 30px;
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
    text-align: center;
`;

const ViewIcons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${theme.colors.gray};
`;

const Button = styled.TouchableOpacity``;

const Icon = styled(Ionicons)`
    font-size: 28px;
    padding: 10px;
`;
