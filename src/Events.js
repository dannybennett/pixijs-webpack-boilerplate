
import {
    Graphics,
    Rectangle
} from 'pixi.js';

export const drawDots = (app) => {
    app.ticker.add((d) => {
        const rectangle = new Graphics();
        rectangle.beginFill(0xFFFFFF)
            .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 1, 1)
            .endFill();

        app.stage.addChild(rectangle);
    });
}