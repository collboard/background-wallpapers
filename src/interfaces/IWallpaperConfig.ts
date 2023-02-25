import {
  Arrayable,
  IStringMessage,
  string_char_emoji,
  string_module_category,
  string_module_name,
  string_url_image
} from '@collboard/modules-sdk';

export interface IWallpaperConfig {
    /**
     * Unique name of the wallpaper in a module name
     */
    name: string;

    /**
     * Old name of the module
     */
    deprecatedNames?: Arrayable<string_module_name>;

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

    /**
     * Module categories omitting "Wallpaper" and "Education" which will be added automatically
     */
    categories?: string_module_category[];

    /**
     * Icon of the module
     * - It can be a URL to image in format for web (like png, svg, webp,...)
     * - It can be UTF-8 emoji like 🐇
     *
     * Do not recommend to put here urlencoded dataurl.
     */
    icon?: string_url_image | string_char_emoji;
}
