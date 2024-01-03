export interface IScreenNavigation {
    navigate: (screen: string) => void;
}

export interface IScreenNavigationProps {
    navigate: (screen: string, params: string) => void;
}

export interface IRoverData {
    landing_date: string;
    launch_date: string;
    max_date: string;
    max_sol: number;
    name: string;
    status: string;
    total_photos: number;
}

export interface IImageData {
    img_src: string;
    earth_date: string;
    sol: number;
    camera: { full_name: string; name: string };
    id: number;
    rover: { name: string; status: string };
}
