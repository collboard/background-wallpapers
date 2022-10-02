import { IStringMessage, string_url_image } from '@collboard/modules-sdk';

export interface IWallpaperConfig {
    /**
     * Unique name of the wallpaper in a module name
     */
    name: string;

    /**
     * Title to display in the UI and module store
     */
    title: IStringMessage;

    /**
     * Description to display in the module store
     */
    description: IStringMessage;

    /**
     * Source of the wallpaper
     */
    src: string_url_image;
}
