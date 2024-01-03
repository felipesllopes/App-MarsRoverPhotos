import { IImageData } from "../interface";
import { api, key } from "../services/api";

export const functionSearchPhotos = async (
    rover: string,
    dat: string,
    can: string,
    setPhotoList: (value: React.SetStateAction<IImageData[]>) => void,
    setLoading: (value: React.SetStateAction<boolean>) => void,
) => {
    api.get(
        `mars-photos/api/v1/rovers/${rover}/photos?earth_date=${dat}&camera=${can}&api_key=${key}`,
    )
        .then(async data => {
            setPhotoList(await data.data.photos);
        })
        .catch(error => {
            alert("Erro ao buscar imagens.");
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
};
