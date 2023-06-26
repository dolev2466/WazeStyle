

export enum CenterActionType {
    CenterMode = "CenterMode",
    FreeMode = "FreeMode"
}

export interface CenterAction {
    type: CenterActionType;
    payload: any
}

export function centerMode(): CenterAction {
    return { type: CenterActionType.CenterMode, payload: 1 } //think about it 
}