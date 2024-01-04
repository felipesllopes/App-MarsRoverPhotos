import styled from "styled-components/native";

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
    align-items: center;
`;

export const RoverPhoto = styled.Image`
    height: 200px;
    aspect-ratio: 2;
    margin: 30px;
`;

export const Text = styled.Text`
    font-size: 18px;
`;
