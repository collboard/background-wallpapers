import { BackgroundWallpaperArt, IModuleDefinition, IModuleManifest, ISystems } from '@collboard/modules-sdk';
import { IWallpaperConfig } from '../interfaces/IWallpaperConfig';

/**
 * Makes a module which places a wallpaper
 *
 */
export function makeBackgroundWallpaperModule(
    wallpaperModuleManifest: IModuleManifest & IWallpaperConfig,
): IModuleDefinition {
    const { manifest, place, order, createElement } = wallpaperModuleManifest;

    return {
        manifest: wallpaperModuleManifest,
        async setup(systems: ISystems) {
            const { virtualArtVersioningSystem } = await systems.request('virtualArtVersioningSystem');

            return virtualArtVersioningSystem
                .createPrimaryOperation()
                .newArts(new BackgroundWallpaperArt(wallpaperModuleManifest.src))
                .persist();
        },
    };
}

/*


{
        manifest: {
            name: `${packageName}/space`,
            version,
            deprecatedNames: 'SpaceBackground',
            title: { en: 'Space', cs: 'Vesmír' },
            description: { en: 'Changes white background to space.', cs: 'Vymění bílé pozadí za vesmírné.' },

            categories: [
                'Wallpaper',
                'Geography',
                'Space',
                'Education' /* Not template because to user do not seem so * /,
              ],
              icon: '🌌', // TODO: Icon because other planets than Earth and Moon do not have emoji icon
              screenshots: [
                  /*TODO:* /
              ],
              author: Authors.hejny,
          },

          async setup(systems) {

          },
      }











*/

/**
 * TODO: Should makers recieve object with manifest OR extended manifest?
 */
