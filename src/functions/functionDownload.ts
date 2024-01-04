import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";
import { schedulePushNotification } from "../notification";

export const functionDownload = async (url: string, rover: string) => {
    await MediaLibrary.requestPermissionsAsync()
        .then(({ status }) => {
            if (status != "granted") {
                Alert.alert(
                    "Permissão negada",
                    "A permissão para acesso da galeria foi negada.",
                );
                return;
            }
        })
        .catch(error => {
            alert("Erro ao acessar galeria");
            console.log("Erro ao acessar galeria");
        });

    const filename = "mars_rover_photo.jpg";
    const fileUri = FileSystem.documentDirectory + filename;
    const subtitle = "Imagem rover " + rover;

    const download = FileSystem.createDownloadResumable(url, fileUri);
    await download
        .downloadAsync()
        .then(async ({ uri }) => {
            MediaLibrary.saveToLibraryAsync(uri);
        })
        .then(async () => {
            await schedulePushNotification(filename);
        })
        .catch(error => {
            alert("Erro ao salvar imagem");
            console.log(error);
        });
};
