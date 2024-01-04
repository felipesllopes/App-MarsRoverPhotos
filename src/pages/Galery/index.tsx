import React, { useContext, useEffect, useState } from "react";
import { PhotoList } from "../../components/PhotoList";
import { AuthContext } from "../../context";
import { IImageData } from "../../interface";
import { getAsyncStorage } from "../../services/asyncStorage";
import {
    Container,
    ImageFlatList,
    Screen,
    TextEmpty,
    Wallpaper,
} from "./styles";

export const Galery: React.FunctionComponent = () => {
    const [photoList, setPhotoList] = useState<IImageData[]>([]);
    const { update } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            setPhotoList(await getAsyncStorage());
        })();
    }, [setPhotoList, update]);

    return (
        <Container>
            <Wallpaper source={require("../../assets/wallpaperImages.png")}>
                <Screen>
                    <ImageFlatList
                        data={photoList}
                        renderItem={({ item }) => <PhotoList item={item} />}
                        numColumns={3}
                        ListEmptyComponent={
                            <TextEmpty>
                                Não existe nenhuma imagem salva.
                            </TextEmpty>
                        }
                    />
                </Screen>
            </Wallpaper>
        </Container>
    );
};
