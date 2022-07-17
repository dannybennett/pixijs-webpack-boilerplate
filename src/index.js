import {
    Application,
    Graphics,
    Text,
    TextStyle,
    Texture,
    Sprite,
    Container,
    ParticleContainer,
    Loader
} from 'pixi.js';
import { getSprite, getPolygon, getText } from './Library';

// or reduction and use @pixi/app - https://medium.com/anvoevodin/how-to-set-up-pixijs-v5-project-with-npm-and-webpack-41c18942c88d

// sprite palette - https://lospec.com/palette-list
// tutorial - https://www.youtube.com/watch?v=ajaduDDePIY

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view)

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

