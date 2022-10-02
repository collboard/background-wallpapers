import { string_url_image } from '@collboard/modules-sdk';

// !!! To maker file

export interface IWallpaperConfig /* !!! Extends IModuleManifest*/{
    /* !!! Remove
    /**
     * Unique name of the wallpaper in a module name
     * /
    name: string;

    /**
     * Title to display in the UI and module store
     * /
    title: IStringMessage;

    /**
     * Description to display in the module store
     * /
    description: IStringMessage;

    */

    /**
     * Source of the wallpaper
     */
    src: string_url_image;
}
