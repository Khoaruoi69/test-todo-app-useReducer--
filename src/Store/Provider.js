

import Context from "./Context";
import {Children, useReducer} from "react";
import Reducer, {initState} from "./reducer";

function Provider(){
    const [state, dispatch] = useReducer(Reducer, initState);

    return(
        <Context.Provider value ={[state, dispatch]}>
            {Children}
        </Context.Provider>
    )
}

export default Provider;