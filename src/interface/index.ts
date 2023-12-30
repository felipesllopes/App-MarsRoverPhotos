export interface IScreenNavigation {
    navigate: (screen: string) => void;
}

export interface IScreenNavigationProps {
    navigate: (screen: string, params: string) => void;
}
