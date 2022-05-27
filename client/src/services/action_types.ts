export type Action = {
    type: ActionType,
    data: any,
    error: any
}

export enum ActionType {
    AUTH_INIT = "AUTH_INIT",
    SIGN_UP = "SIGN_UP",
    SIGN_IN_EMAIL = "SIGN_IN_EMAIL",
    SIGN_IN_GOOGLE = "SIGN_IN_GOOGLE",
    SIGN_OUT = "SIGN_OUT",
    AUTH_STATE_CHANGED = "AUTH_STATE_CHANGED",

    ERROR = "ERROR"
}