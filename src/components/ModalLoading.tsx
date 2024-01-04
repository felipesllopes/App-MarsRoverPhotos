import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";

export const ModalLoading: React.FunctionComponent = () => {
    return (
        <Modal transparent={true} animationType="fade" visible={true}>
            <BackScreen>
                <Loading size={"large"} />
            </BackScreen>
        </Modal>
    );
};

const BackScreen = styled.SafeAreaView`
    background-color: rgba(50, 50, 50, 0.9);
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Loading = styled.ActivityIndicator``;
