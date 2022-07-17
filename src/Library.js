import {
    Application,
    Graphics,
    Text,
    TextStyle,
    Texture,
    Sprite,
    Container,
    ParticleContainer,
    Loader,
    Rectangle,
    AnimatedSprite
} from 'pixi.js';


// POLYGONS
export const getPolygon = () => {
    const poly = new Graphics();
    poly.beginFill(0xFF66FF)
        .lineStyle(5, 0xFFEECC)
        .drawPolygon([
            600, 50,
            800, 150,
            900, 300,
            400, 400
        ]).endFill();

    return poly;
}

// TEXT
export const getText = () => {
    const style = new TextStyle({
        fontFamily: 'Montserrat',
        fontSize: 48,
        fill: 'deepskyblue',
        stroke: '#ffffff',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowDistance: 10,
        dropShadowAngle: Math.PI / 2,
        dropShadowBlur: 4,
        dropShadowColor: '#000000'
    });
    const text = new Text(' text message ', style);
    return text;
}

// you need to make sure the webpack config copies the files to the target or the below will not work
export const getSprite = (sprite) => {
    const char1Texture = Texture.from(sprite);
    const char1Sprite = new Sprite(char1Texture);
    return char1Sprite;
}

export const addAnimatedSprite = (app, options) => {
    const loader = Loader.shared;
    loader.add('tileset', options.json);

    loader.load((loader, resources) => {
        const textures = [];

        for (let i = options.startFrame; i <= options.endFrame; i++) {
            const texture = Texture.from(`${options.filePrefix}${i}.png`)
            textures.push(texture);
        }

        const animatedSprite = new AnimatedSprite(textures);

        animatedSprite.position.set(options.position.x, options.position.y);
        animatedSprite.scale.set(options.scaleWidth, options.scaleHeight);
        animatedSprite.animationSpeed = options.speed;

        app.stage.addChild(animatedSprite);
        animatedSprite.play();
    });
}
