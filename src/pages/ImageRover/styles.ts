import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { IImageData } from "../../interface";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Wallpaper = styled.ImageBackground`
    flex: 1;
    width: 100%;
`;

export const Screen = styled.View`
    flex: 1;
    background-color: rgba(200, 200, 200, 0.6);
`;

export const Header = styled.View`
    background-color: ${theme.colors.black};
    padding: 10px 5px;
`;

export const ViewData = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ViewDate = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    width: 175px;
    height: 40px;
    border-radius: 10px;
    background-color: ${theme.colors.white};
`;

export const DateIcon = styled(Ionicons)`
    font-size: 28px;
    padding: 0 10px;
`;

export const TextDate = styled.Text`
    font-size: 17px;
`;

export const ViewPicker = styled.View`
    width: 175px;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    background-color: ${theme.colors.white};
`;

export const CamPicker = styled(Picker)``;

export const IconCam = styled(Ionicons)`
    position: absolute;
    right: 14px;
    font-size: 28px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.white};
    margin: 20px 0 5px;
    padding: 5px;
    border-radius: 10px;
`;

export const TextButton = styled.Text`
    text-align: center;
    font-size: 18px;
`;

export const Results = styled.Text`
    font-size: 17px;
    color: ${theme.colors.white};
`;

export const ImageFlatList = styled(
    FlatList as new (props: FlatListProps<IImageData>) => FlatList<IImageData>,
).attrs({
    contentContainerStyle: {
        alignSelf: "center",
    },
})``;

export const TextEmpty = styled.Text`
    font-size: 20px;
    font-style: italic;
    margin: 20% 30px;
    text-align: center;
`;
