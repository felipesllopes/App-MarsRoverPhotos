import { IImageData, IRoverData } from "../interface";
import { api, key } from "../services/api";

export const functionSearchingData = async (
    setLoading: (value: React.SetStateAction<boolean>) => void,
    nameRover: String,
    setRoverData: (value: React.SetStateAction<IRoverData>) => void,
    date: Date,
    dayInMilliseconds: number,
    setCamList: (value: React.SetStateAction<any[]>) => void,
    setPhotoList: (value: React.SetStateAction<IImageData[]>) => void,
    setContextRoverData: (value: React.SetStateAction<IRoverData>) => void,
) => {
    setLoading(true);

    await api
        .get(
            `mars-photos/api/v1/manifests/${nameRover.toLowerCase()}?api_key=${key}`,
        )
        .then(async data => {
            setRoverData(await data.data.photo_manifest);
            setContextRoverData(await data.data.photo_manifest);
        })
        .then(async () => {
            await api
                .get(
                    `mars-photos/api/v1/rovers/${nameRover.toLowerCase()}/photos?earth_date=${new Date(
                        date.getTime() - 1 * dayInMilliseconds,
                    )
                        .toISOString()
                        .slice(0, 10)}&api_key=${key}`,
                )
                .then(async value => {
                    let data = [];
                    data = await value.data.photos;

                    const camList = data
                        .map(item => item.camera.name)
                        .filter(
                            (value, index, array) =>
                                array.indexOf(value) === index,
                        );
                    setCamList(camList);
                    setPhotoList([]);
                })
                .catch(error => {
                    alert("Erro ao buscar dados do Rover.");
                    console.log(error);
                });
        })
        .catch(error => {
            alert("Erro ao buscar datas.");
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
};
