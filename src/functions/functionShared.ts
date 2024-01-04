import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";

export const functionShared = async (url: string) => {
    const filename = "mars_rover_photo.jpg";

    await FileSystem.downloadAsync(url, FileSystem.documentDirectory + filename)
        .then(async result => {
            await shareAsync(result.uri);
        })
        .catch(error => {
            alert("Erro ao compartilhar arquivo");
            console.log(error);
        });
};
