import { Picker, PickerProps } from "@react-native-picker/picker";
import React from "react";
import styled from "styled-components/native";
import theme from "../global/styles/theme";

interface IProps extends PickerProps {
    getValue: string;
    setValue: (value: React.SetStateAction<string>) => void;
    list: any[];
}

export const CustomPicker: React.FunctionComponent<IProps> = ({
    getValue,
    setValue,
    list,
    ...otherProps
}) => {
    return (
        <CamPicker
            dropdownIconColor={theme.colors.white}
            selectedValue={getValue}
            onValueChange={(item: string, index) => setValue(item)}
            {...otherProps}
        >
            {list.map((v, k) => {
                return <Picker.Item key={k} value={v} label={v} />;
            })}
        </CamPicker>
    );
};

const CamPicker = styled(Picker)``;
