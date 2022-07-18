// const polygon = getPolygon();
// app.stage.addChild(polygon);

// const text = getText();
// app.stage.addChild(text);

// const sprite = getSprite('images/medusa.png')
// app.stage.addChild(sprite);

const char1Texture = Texture.from('images/medusa.png');
const char1Sprite = new Sprite(char1Texture);

char1Sprite.scale.x = 1.5;
char1Sprite.scale.y = 2;

app.stage.addChild(char1Sprite)


// TICKER
app.ticker.add(delta => loop(delta));

function loop(delta) {
    // char1Sprite.x+=1;
    char1Sprite.rotation += 0.01;
}

char1Sprite.position.set(800, 400);
// set middle of rotation to middle of image
char1Sprite.anchor.set(0.5, 0.5);

// make it interactive so any event you add to it will work
char1Sprite.interactive = true;
// change the cursor to a hand (button mode)
char1Sprite.buttonMode = true;
char1Sprite.on('pointerdown', () => {
    char1Sprite.scale.x += 0.1;
    char1Sprite.scale.y += 0.1;
})


// add movements
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight')
        char1Sprite.x += 10;
    if (e.key === 'ArrowLeft')
        char1Sprite.x -= 10;
    if (e.key === 'ArrowUp')
        char1Sprite.y -= 10;
    if (e.key === 'ArrowDown')
        char1Sprite.y += 10;
})

// not exactly sure what this does
const particleContainer = new ParticleContainer(1000, {
    position: true,
    rotation: true,
    vertices: true,
    tint: true,
    uvs: true,
});

// sprite loader
const loader = Loader.shared;
loader.add('char4Texture', 'images/medusa.png');
loader.add('char5Texture', 'images/bunnys.png');
loader.load((loader, resources) => {
    const char4Sprite = new Sprite(
        resources.char5Texture.texture
    );
    char4Sprite.y = 400;
    app.stage.addChild(char4Sprite);
});



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
export const AddSprite = (app) => {
    const texture = Texture.from(sprite);
    const sprite = new Sprite(texture);
    app.stage.addChild(sprite);
}

export const AddMovableSprite = (app, loader, options) => {

    const direction = {
        right: "right",
        left: "left",
        up: "up",
        down: "down"
    };

    loader.load((loader, resources) => {
        const textures = [];

        options[direction.right].frames.forEach((f, i) => {
            textures.push(Texture.from(`${options.filePrefix}${f}.png`));
        })

        const sprite = new Sprite(textures[0]);

        sprite.position.set(options.position.x, options.position.y);
        sprite.scale.set(options.scaleWidth, options.scaleHeight);

        app.stage.addChild(sprite);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight')
                sprite.x += options.movementSpeed;
            if (e.key === 'ArrowLeft')
                sprite.x -= options.movementSpeed;
            if (e.key === 'ArrowUp')
                sprite.y -= options.movementSpeed;
            if (e.key === 'ArrowDown')
                sprite.y += options.movementSpeed;
        })
    });
}


// TODO: handle the direction change within this function, also unless moving it should stand still
export const AddAnimatedSprite = (app, loader, options, direction) => {

    loader.load((loader, resources) => {
        const textures = [];

        options[direction].frames.forEach((f, i) => {
            textures.push(Texture.from(`${options.filePrefix}${f}.png`));
        })

        const animatedSprite = new AnimatedSprite(textures);

        animatedSprite.position.set(options.position.x, options.position.y);
        animatedSprite.scale.set(options.scaleWidth, options.scaleHeight);
        animatedSprite.animationSpeed = options.frameSpeed;

        app.stage.addChild(animatedSprite);
        animatedSprite.play();
        // animatedSprite.stop();

        // TODO: cycle through movement array when key is down, otherwise stand still
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight')
                animatedSprite.x += options.movementSpeed;
                // animatedSprite.play();
            if (e.key === 'ArrowLeft')
                animatedSprite.x -= options.movementSpeed;
            if (e.key === 'ArrowUp')
                animatedSprite.y -= options.movementSpeed;
            if (e.key === 'ArrowDown')
                animatedSprite.y += options.movementSpeed;
        })
    });
}
