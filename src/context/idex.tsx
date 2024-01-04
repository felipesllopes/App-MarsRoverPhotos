import React, { createContext, useState } from "react";
import { IRoverData } from "../interface";

interface IAuthContext {
    contextRoverData: IRoverData;
    setContextRoverData: (value: React.SetStateAction<IRoverData>) => void;
}

interface IProps {
    children: React.ReactElement;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
    const [contextRoverData, setContextRoverData] = useState<IRoverData>(
        {} as IRoverData,
    );

    return (
        <AuthContext.Provider value={{ contextRoverData, setContextRoverData }}>
            {children}
        </AuthContext.Provider>
    );
};
