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
    AnimatedSprite,
    TilingSprite
} from 'pixi.js';

import { CreatePolygon, AddText, LoadSprite, LoadAnimation } from './SpriteActions';

import skeleton from './data/skeleton.json';
import extskeleton from './data/ext-skeleton.json';

const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: false,
    antialias: true
});

const directions = {
    right: "right",
    left: "left",
    up: "up",
    down: "down"
};

// use as a container for sprites
const sprites = {};
const position = { x: 0, y: 0 };
let direction = directions.right;
app.renderer.backgroundColor = 0x23395D;
app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view)

// loader examples - https://pixijs.download/dev/docs/PIXI.Loader.html
const loader = Loader.shared;

// signature (sprites, json) - can be chained
loader.add(skeleton.tileset, skeleton.json);

loader.load((loader, resources) => {

    sprites.animatedSprite = LoadAnimation(skeleton, direction, position);
});

loader.onComplete.add(() => {
    app.stage.addChild(sprites.animatedSprite);

    app.ticker.add((d) => {
        // console.log(sprites.animatedSprite.x);
        // console.log(app.screen.width);

        if (sprites.animatedSprite.x < 0) {
            direction = directions.right;
            app.stage.removeChild(sprites.animatedSprite);
            sprites.animatedSprite = LoadAnimation(skeleton, direction, { x: 0, y: 0 });
            app.stage.addChild(sprites.animatedSprite);
        } else if (sprites.animatedSprite.x >= app.screen.width) {
            direction = directions.left;
            app.stage.removeChild(sprites.animatedSprite);
            sprites.animatedSprite = LoadAnimation(skeleton, direction, { x: app.screen.width - 1, y: 0 });
            app.stage.addChild(sprites.animatedSprite);
        }
        else if (direction == directions.right)
            sprites.animatedSprite.x += skeleton.movementSpeed;
        else if (direction == directions.left)
            sprites.animatedSprite.x -= skeleton.movementSpeed;
    });
});


// TODO: cycle through movement array when key is down, otherwise stand still
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight')
        direction = directions.right;
    if (e.key === 'ArrowLeft')
        direction = directions.left;
    if (e.key === 'ArrowUp')
        direction = directions.up;
    if (e.key === 'ArrowDown')
        direction = directions.down;
})


// good set of sprite sheets but need to be fixed for movement to the left
// https://www.pngwing.com/en/search?q=heroes-of-might-and-magic-iii

// https://www.youtube.com/watch?v=ajaduDDePIY
// const clouds = Texture.from('')
