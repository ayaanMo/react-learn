import React, { useReducer } from 'react';
// 1.创建初始值initialState
// 2.创建所有操作reducer(state,action)
// 3.将reducer和initialState传给useReducer，得到读写API
// 4.调用dispatch来进行读写state

//第一步
const initial = { count: 0 };
//第二步
const reducer = (state, action) => {
    if (action === "plus") {
        return { count: state.count + 1 };
    } else if (action === "minus") {
        return { count: state.count - 1 };
    } else {
        throw new Error("unknow type")
    }
}
function HookExample04() {
    //第三步
    const [state, dispatch] = useReducer(reducer, initial);
    const plus = () => {
        //第四步
        dispatch("plus");
    }
    const minus = () => {
        dispatch("minus");
    }
    return <div>
        <p>count:{state.count}</p>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
    </div>
}
export default HookExample04;
