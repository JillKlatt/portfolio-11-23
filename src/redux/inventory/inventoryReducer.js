import { ADD_ITEM, REMOVE_ITEM } from "./inventoryActionTypes";

const initialState = {
    items: []
};

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: [
                    ...state.items.slice(0, action.payload),
                    ...state.items.slice(action.payload + 1)
                ]
            };
        default:
            return state;
    }
};

export default inventoryReducer;
