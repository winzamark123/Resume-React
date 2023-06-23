export default class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sprite_size = config.sprite_size || 32;
        this.src = config.src || "./assets/PlaceHolderMap.png";
    }
}