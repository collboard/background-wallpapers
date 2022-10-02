import { BackgroundWallpaperArt, declareModule } from '@collboard/modules-sdk';
import { contributors, name as packageName, version } from '../package.json';
import { WALLPAPERS } from './config';

for (const { name, deprecatedNames, title, description, categories, icon, src } of WALLPAPERS) {
    declareModule({
        manifest: {
            name: `${packageName}/${name}`,
            version,
            deprecatedNames,
            title,
            description,
            categories: [
                ...(categories || []),
                'Wallpaper',
                'Education' /* <- Note: Not template because to user do not seem so */,
            ],
            icon: icon || src,
            contributors,
        },

        async setup(systems) {
            const { virtualArtVersioningSystem } = await systems.request('virtualArtVersioningSystem');

            return virtualArtVersioningSystem
                .createPrimaryOperation()
                .newArts(new BackgroundWallpaperArt(src))
                .persist(/* Note: This is a virtual operation but we want still to keep same API. */);
        },
    });
}

/**
 * TODO: Screenshots in manifest
 * TODO: Maybe a maker for this - makeBackgroundWallpaperModule (same in all @collboard/background-* repositories)
 *       Draft in https://github.com/collboard/background-wallpapers/pull/1
 */
