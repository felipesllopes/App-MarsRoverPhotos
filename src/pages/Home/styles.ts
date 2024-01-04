import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Wallpaper = styled.ImageBackground`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: ${theme.colors.white};
    font-weight: bold;
    text-align: center;
    margin: 30px 10px 10px;
`;

export const ViewButton = styled.View`
    margin-top: 50%;
    width: 60%;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 6px;
    background-color: rgba(80, 80, 80, 0.7);
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
