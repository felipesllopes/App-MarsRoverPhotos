import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Container, Title } from "./styles";

export const ImageRover: React.FunctionComponent = () => {
    const route = useRoute();
    const name = route.params as String;
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, [navigation, name]);

    return (
        <Container>
            <Title>{name}</Title>
        </Container>
    );
};
