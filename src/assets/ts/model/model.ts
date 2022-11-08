
export type Coordinates ={
    X: number;
    Y: number;
}

export type Size = {
    length: number;
    width: number;
}

export type Color = string;

export type Element = ImageType | TextType | FigureType;

export type Card = {
    elements: Element[],
    background: Color,
    generalState: GeneralState,
    size: Size,
    filter: Color,
};

export type ImageType = {
    value: string,
    size: Size,
    coordinates: Coordinates,
    id: number,
}

export type TextType = {
    fieldSize: Size,
    value: string,
    textSize: number,
    color: Color,
    coordinates: Coordinates,
    id: number,
}

export enum Tool{
    move,
    painter,
    rect,
    circle,
    polygon,
}

export type GeneralState = {
    firstColor: Color,
    //secondColor: Color,
    //fillColor: Color,
    toolbarState: Tool;
}

export type FigureType = {
    figure: RectangleT | CircleT | PolygonT,
    fillColor: Color,
    strokeColor: Color,
    coordinates: Coordinates,
    id: number;

}

export type RectangleT = {
    size: Size,
}

export type CircleT = {
    radius: number,
}

export type PolygonT = {
    firstPoint: Coordinates,
    secondPoint: Coordinates,
    thirdPoint: Coordinates,
}


