import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { LoadingScreen } from "../../components/LoadingScreen";
import { ModalLoading } from "../../components/ModalLoading";
import { PhotoList } from "../../components/PhotoList";
import { functionSearchPhotos } from "../../functions/functionSearchPhotos";
import { functionSearchingData } from "../../functions/functionSearchingData";
import { IImageData, IRoverData } from "../../interface";
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

interface IParams {
    nameRover: string;
}

export const ImageRover: React.FunctionComponent = () => {
    const route = useRoute();
    const { nameRover } = route.params as IParams;
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
            title: nameRover,
        });
    }, [navigation, nameRover]);

    useEffect(() => {
        (async () => {
            await Ionicons.loadFont().then(() => {
                setLoadingIcons(false);
            });
        })();
    }, []);

    useEffect(() => {
        (async () => {
            await functionSearchingData(
                setLoading,
                nameRover,
                setRoverData,
                date,
                dayInMilliseconds,
                setCamList,
                setPhotoList,
            );
        })();
    }, [date]);

    const closeDate = (event: Object, date: Date | undefined) => {
        setShow(false);
        if (date) {
            setDate(date);
        }
    };

    const handleSearch = async () => {
        const rover = nameRover && nameRover.toLowerCase();
        const dat = new Date(date.getTime() - 1 * dayInMilliseconds)
            .toISOString()
            .slice(0, 10);
        const can = cam && cam.toLowerCase();
        setLoading(true);

        await functionSearchPhotos(rover, dat, can, setPhotoList, setLoading);
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
