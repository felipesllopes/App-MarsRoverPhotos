import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Wallpaper = styled.ImageBackground`
    flex: 1;
    width: 100%;
`;

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
