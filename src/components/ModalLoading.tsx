import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Modal } from "react-native";

interface IProps {
    loading: boolean;
}

export const ModalLoading: React.FunctionComponent<IProps> = ({ loading }) => {
    return (
        <Modal transparent={true} animationType="fade" visible={loading}>
            <BackScreen>
                <Loading size={"large"} />
            </BackScreen>
        </Modal>
    );
};

const BackScreen = styled.SafeAreaView`
    background-color: rgba(90, 90, 90, 0.6);
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Loading = styled.ActivityIndicator``;
