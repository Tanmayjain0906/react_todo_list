import {REMOVE_ITEM, EDIT_ITEM, ADD_ITEM} from "../actions/actionsTypes";

const initialState = [];

const todoReducer = (state=initialState, action) => {

    if(action.type == ADD_ITEM)
    {
        return [...state, action.payload];
    }
    else if(action.type == EDIT_ITEM)
    {
        const arr = [...state];
        const id = action.payload.id;

        for(let i = 0; i < arr.length; i++)
        {
            if(Number(id) == arr[i].id)
            {
                arr[i].title = action.payload.title;
                return arr;
            }
        }

    }
    else if(action.type == REMOVE_ITEM)
    {
        const id = action.payload;
        const arr = state.filter((item) => item.id !== id);
        return arr;
    }
    else
    {
        return state;
    }
}

export default todoReducer;