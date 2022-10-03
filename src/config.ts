import surrealCity from '../assets/wallpapers/midjourney/Pavol_Hejn_surreal_Starry_starry_night_bc58dc1d-c5b8-4223-805d-91a91440abc1.png';
import galaxy1 from '../assets/wallpapers/space/galaxy1.jpg';
import { IWallpaperConfig } from './interfaces/IWallpaperConfig';

export const WALLPAPERS: IWallpaperConfig[] = [
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
    {
        name: 'midjourney/surreal-city' /* <- [0] */,
        // TODO: CS
        title: { en: 'Surreal city' },
        description: { en: 'Surreal city dra' },
        categories: ['Space'],
        // TODO: !!! Test that using src is working> icon: '🌌',
        src: surrealCity,
        // TODO: Add MidJourney to authors list
        // TODO: Make also color palette + skin + UI to by in color sync with this wallpaper
    },
];

/**
 * TODO: Maybe include (sub)cathegories (Already included in name [0])
 */
