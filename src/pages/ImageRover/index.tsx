import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { LoadingScreen } from "../../components/LoadingScreen";
import { ModalLoading } from "../../components/ModalLoading";
import { PhotoList } from "../../components/PhotoList";
import { IImageData, IRoverData } from "../../interface";
import { api, key } from "../../services/api";
import {
    Button,
    CamPicker,
    Container,
    DateIcon,
    Header,
    IconCam,
    ImageFlatList,
    Results,
    Screen,
    TextButton,
    TextDate,
    ViewData,
    ViewDate,
    ViewPicker,
    Wallpaper,
} from "./styles";

export const ImageRover: React.FunctionComponent = () => {
    const route = useRoute();
    const name = route.params as String;
    const navigation = useNavigation();
    const [photoList, setPhotoList] = useState<IImageData[]>([]);
    const [roverData, setRoverData] = useState<IRoverData>({} as IRoverData);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [camList, setCamList] = useState([]);
    const [cam, setCam] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingIcons, setLoadingIcons] = useState(true);
    /**
     * Contagem dos milissegundos. 21h (-3 do fuso horário) * 60m * 60s * 1000mn
     */
    const dayInMilliseconds = 3 * 60 * 60 * 1000;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, [navigation, name]);

    useEffect(() => {
        (async () => {
            await Ionicons.loadFont().then(() => {
                setLoadingIcons(false);
            });
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setLoading(true);
            await api
                .get(
                    `mars-photos/api/v1/manifests/${name.toLowerCase()}?api_key=${key}`,
                )
                .then(async data => {
                    setRoverData(await data.data.photo_manifest);
                })
                .then(async () => {
                    await api
                        .get(
                            `mars-photos/api/v1/rovers/${name.toLowerCase()}/photos?earth_date=${new Date(
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
                });
        })()
            .catch(error => {
                alert("Erro.");
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [date]);

    const closeDate = (event: Object, date: Date | undefined) => {
        setShow(false);
        if (date) {
            setDate(date);
        }
    };

    const handleSearch = async () => {
        const rover = name && name.toLowerCase();
        const dat = new Date(date.getTime() - 1 * dayInMilliseconds)
            .toISOString()
            .slice(0, 10);
        const can = cam && cam.toLowerCase();
        setLoading(true);
        console.log(
            `mars-photos/api/v1/rovers/${rover}/photos?earth_date=${dat}&camera=${can}&api_key=${key}`,
        );
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

    return (
        <Container>
            <Wallpaper source={require("../../assets/wallpaperImages.png")}>
                <Screen>
                    <Header>
                        <ViewData>
                            <ViewDate
                                onPress={() => setShow(true)}
                                activeOpacity={0.8}
                            >
                                <DateIcon name="calendar" />
                                <TextDate>
                                    {date.toLocaleDateString().slice(0, 10)}
                                </TextDate>
                            </ViewDate>

                            {show && roverData.max_date && (
                                <DateTimePicker
                                    value={date}
                                    mode="date"
                                    display="calendar"
                                    maximumDate={
                                        new Date(
                                            new Date(
                                                roverData.max_date,
                                            ).getTime() +
                                                1 * dayInMilliseconds,
                                        )
                                    }
                                    minimumDate={
                                        new Date(roverData.landing_date)
                                    }
                                    onChange={closeDate}
                                />
                            )}

                            <ViewPicker>
                                <CamPicker
                                    dropdownIconColor={"#fff"}
                                    selectedValue={cam}
                                    onValueChange={(item: string, index) =>
                                        setCam(item)
                                    }
                                >
                                    {camList.map((v, k) => {
                                        return (
                                            <Picker.Item
                                                key={k}
                                                value={v}
                                                label={v}
                                            />
                                        );
                                    })}
                                </CamPicker>
                                <IconCam name="camera" />
                            </ViewPicker>
                        </ViewData>
                        <Button
                            onPress={handleSearch}
                            disabled={!camList.length}
                            activeOpacity={0.8}
                        >
                            <TextButton>Buscar</TextButton>
                        </Button>

                        <Results>
                            {photoList.length > 0 &&
                                `Resultados: ${photoList.length}`}
                        </Results>
                    </Header>

                    <ImageFlatList
                        data={photoList}
                        renderItem={({ item }) => <PhotoList item={item} />}
                        numColumns={3}
                    />

                    {loading && <ModalLoading />}
                    {loadingIcons && <LoadingScreen />}
                </Screen>
            </Wallpaper>
        </Container>
    );
};
