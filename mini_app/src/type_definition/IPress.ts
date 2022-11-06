import {ILayout} from "./ILayout";

export interface IPress extends ILayout {

    onPress? (): void
    onLongPress? (): void
}

export interface IPressIcon extends IPress {

    size?: number
    color?: string
}

export interface IPressWithProps extends IPress {
    props?: any
}
