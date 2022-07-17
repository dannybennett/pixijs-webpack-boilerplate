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

