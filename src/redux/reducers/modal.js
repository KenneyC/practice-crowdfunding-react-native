import { CLOSE_MODAL, OPEN_MODAL } from "../actions/modal"

const initialState = {
    activated: false,
    modal: ''
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                activated: true,
                modal: action.payload
            };
        case CLOSE_MODAL:
            return {
                ...state,
                activated: false,
                modal: ''
            };
        default:
            return state;
    }
}
