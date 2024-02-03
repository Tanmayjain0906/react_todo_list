import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from "./actionsTypes"

export const add_item = (item) => {
    return {
        type: ADD_ITEM,
        payload: item,
    }
}

export const remove_item = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id,
    }
}

export const edit_item = (item) => {
    return {
        type: EDIT_ITEM,
        payload: item,
    }
}