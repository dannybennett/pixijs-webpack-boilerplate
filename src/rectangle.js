const drawRectangle = () => {
    const rectangle = new Graphics();

    rectangle.beginFill(0xAA33BB)
        .lineStyle(4, 0xFFEA00, 1)
        .drawRect(200, 200, 100, 120)
        .endFill();

    return rectangle;
}

export default drawRectangle;