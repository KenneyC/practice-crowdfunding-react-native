export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (componentName) => {
    return {
        type: OPEN_MODAL,
        payload: componentName
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}
