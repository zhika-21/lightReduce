import { createContext, useReducer } from "react";

const initialState = false;
const reduceFunction = (state, action) => {
    switch (action) {
        case "changeLight":
            return !state;
        default:
            return state;
    }
};
export const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
    const [isOn, dispach] = useReducer(reduceFunction, initialState);
    const data = {
        isOn: isOn,
        dispach: dispach,
    };
    return <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>;
};