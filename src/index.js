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

import { getSprite, getPolygon, getText, addAnimatedSprite } from './SpriteActions';
import skeleton from './data/skeleton.json';

const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;
app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view)

const direction = {
    right: "right",
    left: "left",
    up: "up",
    down: "down"
};

addAnimatedSprite(app, skeleton, direction.right);


// https://www.youtube.com/watch?v=ajaduDDePIY
// const clouds = Texture.from('')
