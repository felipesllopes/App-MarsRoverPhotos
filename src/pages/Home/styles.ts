import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Wallpaper = styled.ImageBackground`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: ${theme.colors.white};
    text-align: center;
    margin: 10% 20px;
    position: absolute;
    top: 0;
`;

export const ViewButton = styled.View`
    width: 60%;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 6px;
    background-color: #505050;
    width: 100%;
    margin: 10px;
    border-width: 1px;
`;

export const TextButton = styled.Text`
    color: ${theme.colors.white};
    font-size: 20px;
    padding: 5px 12px;
    text-align: center;
`;
