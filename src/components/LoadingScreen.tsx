import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";

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
    background-color: #000;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.Image`
    height: 250px;
    width: 250px;
`;
