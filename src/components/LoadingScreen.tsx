import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import theme from "../global/styles/theme";

export const LoadingScreen: React.FunctionComponent = () => {
    return (
        <Modal animationType="fade" visible={true}>
            <Container>
                <Logo
                    source={require("../assets/logo.png")}
                    resizeMode="contain"
                />
            </Container>
        </Modal>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${theme.colors.black};
    align-items: center;
    justify-content: center;
`;

const Logo = styled.Image`
    height: 200px;
    width: 200px;
`;
