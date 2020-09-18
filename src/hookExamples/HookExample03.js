import React, { useState, useContext, createContext } from 'react';
// 1.初始化创建全局Context 利用C = createContext();
// 2.使用<C.Provider>圈定作用域
// 3.在作用域内使用useContext(C)获取上下文内容


//第一步
const ThemeContext = createContext();
function HookExample03() {
    const [theme, setTheme] = useState("pink");
    const changeTheme = () => {
        if (theme === "pink") {
            setTheme("skyblue")
        } else { setTheme("pink") }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={changeTheme}>颜色切换</button>
            {/* 第二步 */}
            <ThemeContext.Provider value={theme}>
                <ContextApp />
            </ThemeContext.Provider>
        </div>
    )
}
function ContextApp() {
    //第三步
    const theme = useContext(ThemeContext);
    return <div style={{ width: "300px", height: "300px", margin: "50px auto", border: "1px solid #ccc", backgroundColor: `${theme}` }}></div >
}
export default HookExample03;