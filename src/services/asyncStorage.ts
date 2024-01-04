import AsyncStorage from "@react-native-async-storage/async-storage";
import { IImageData } from "../interface";

const key = "@marsroverphotos";

export const getAsyncStorage = async () => {
    const list = await AsyncStorage.getItem(key);
    if (list) {
        return await JSON.parse(list);
    } else {
        return [];
    }
};

export const favoriteAsyncStorage = async (item: IImageData) => {
    let exist = undefined;
    await getAsyncStorage().then(async (values: IImageData[]) => {
        exist = values.some((element: IImageData) => element.id === item.id);
    });
    return exist;
};

export const addAsyncStorage = async (item: IImageData) => {
    await getAsyncStorage().then(async (values: IImageData[]) => {
        await AsyncStorage.setItem(
            key,
            JSON.stringify([...values, item]),
        ).catch(error => {
            alert("Erro ao adicionar item.");
            console.log(error);
        });
    });
};

export const rmvAsyncStorage = async (item: IImageData) => {
    await getAsyncStorage().then(async (values: IImageData[]) => {
        const list = values.filter((element: IImageData) => {
            return element.id != item.id;
        });
        await AsyncStorage.setItem(key, JSON.stringify(list));
        return list;
    });
};
