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
import { getSprite, getPolygon, getText, addAnimatedSprite } from './Library';

const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;
app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view)

const skeleton = {
    startFrame: 3,
    endFrame: 9,
    speed: 0.12,
    filePrefix: 'skeleton-1-',
    json: 'images/skeleton/spritesheet.json',
    scaleWidth: 3,
    scaleHeight: 3,
    position: {
        x: 200,
        y: 200
    }
};

const animatedSprite = addAnimatedSprite(app, skeleton);
