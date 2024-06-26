import { ADD_ITEM, REMOVE_ITEM } from "./inventoryActionTypes";

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item,
    };
};

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item,
    };
};