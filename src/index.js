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

import { getSprite, getPolygon, getText, AddAnimatedSprite } from './SpriteActions';

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



const loader = Loader.shared;

loader.add(skeleton.tileset, skeleton.json);

// AddMovableSprite(app, loader, skeleton);

AddAnimatedSprite(app, loader, skeleton);

// drawDots(app);

// good set of sprite sheets but need to be fixed for movement to the left
// https://www.pngwing.com/en/search?q=heroes-of-might-and-magic-iii

// https://www.youtube.com/watch?v=ajaduDDePIY
// const clouds = Texture.from('')
