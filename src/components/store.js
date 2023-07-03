import { createStore } from "redux";

const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        case MINUS:
            return state - 1;
        default:
            return state;
    }
};
const countStore = createStore(reducer);

export default countStore;

export { ADD, MINUS };
