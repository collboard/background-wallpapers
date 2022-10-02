import galaxy1 from '../assets/wallpapers/galaxy1.jpg';
import { IWallpaperConfig } from './interfaces/IWallpaperConfig';



export const WALLPAPERS: Array<IWallpaperConfig> = [
    {
        name: 'space/galaxy' /* <- [0] */,

        deprecatedNames: 'SpaceBackground',
        title: { en: 'Space', cs: 'Vesmír' },
        description: { en: 'Changes white background to space.', cs: 'Vymění bílé pozadí za vesmírné.' },
        categories: ['Geography', 'Space'],
        icon: '🌌',

        /**
         * Sources:
         * https://www.wallpaperflare.com/
         * https://www.wallpaperflare.com/galaxy-wallpaper-landscape-photo-of-sky-star-astrophotography-wallpaper-zubhc
         * https://www.pikrepo.com/fgicl/black-and-blue-galaxy-digital-wallpaper
         */
        src: galaxy1,




    },
];

/**
 * TODO: Maybe include (sub)cathegories (Already included in name [0])
 */
