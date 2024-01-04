import React, { createContext, useState } from "react";
import { IRoverData } from "../interface";

interface IAuthContext {
    contextRoverData: IRoverData;
    setContextRoverData: (value: React.SetStateAction<IRoverData>) => void;
    update: boolean;
    handleUpdate: () => void;
}

interface IProps {
    children: React.ReactElement;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
    const [contextRoverData, setContextRoverData] = useState<IRoverData>(
        {} as IRoverData,
    );
    const [update, setUpdate] = useState(false);

    const handleUpdate = () => {
        setUpdate(current => (current == true ? false : true));
    };

    return (
        <AuthContext.Provider
            value={{
                contextRoverData,
                setContextRoverData,
                update,
                handleUpdate,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
