import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { IImageData } from "../../interface";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Wallpaper = styled.ImageBackground`
    flex: 1;
`;

export const Screen = styled.View`
    flex: 1;
    width: 100%;
    background-color: rgba(200, 200, 200, 0.6);
`;

export const Title = styled.Text``;

export const ImageFlatList = styled(
    FlatList as new (props: FlatListProps<IImageData>) => FlatList<IImageData>,
).attrs({
    contentContainerStyle: {
        alignSelf: "center",
    },
})``;

export const TextEmpty = styled.Text`
    font-size: 19px;
    font-style: italic;
    margin: 20% 30px 0;
    text-align: center;
`;
