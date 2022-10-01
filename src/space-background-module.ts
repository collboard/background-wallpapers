import { Authors } from '../../50-systems/ModuleStore/Authors';
import { internalModules } from '../../50-systems/ModuleStore/internalModules';
import { BackgroundWallpaperArt } from '../../71-arts/40-BackgroundWallpaperArt';

internalModules.declareModule({
    manifest: {
        name: '@colllboard/space-background' /* !!! */,
        deprecatedNames: 'SpaceBackground',
        title: { en: 'Space', cs: 'Vesmír' },
        description: { en: 'Changes white background to space.', cs: 'Vymění bílé pozadí za vesmírné.' },

        categories: ['Wallpaper', 'Geography', 'Space', 'Education' /* Not template because to user do not seem so */],
        icon: '🌌', // TODO: Icon because other planets than Earth and Moon do not have emoji icon
        screenshots: [
            /*TODO:*/
        ],
        author: Authors.hejny,
    },

    async setup(systems) {
        const { virtualArtVersioningSystem } = await systems.request('virtualArtVersioningSystem');

        /**
         * Sources:
         * https://www.wallpaperflare.com/
         * https://www.wallpaperflare.com/galaxy-wallpaper-landscape-photo-of-sky-star-astrophotography-wallpaper-zubhc
         * https://www.pikrepo.com/fgicl/black-and-blue-galaxy-digital-wallpaper
         */

        return virtualArtVersioningSystem
            .createPrimaryOperation()
            .newArts(
                new BackgroundWallpaperArt(
                    `http://localhost:9980/textures/backgrounds/galaxy1.jpg` /* TODO: Allow to patterns to be in front of wallpapers */,
                ),
            )
            .persist(/* Note: This is a virtual operation but we want still to keep same API. */);
    },
});
