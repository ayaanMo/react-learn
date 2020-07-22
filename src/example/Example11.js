import React, { Component } from 'react';
/**
 * 组合VS继承:从官网内容得知所有组件都可以通过组合的方式进行呈现而不需要使用继承来构建组件，props可以提供清晰而安全地定制外观和行为方式(注意：组件可以接受任意props，包括基本数据类型，React元素以及函数),
 * 假如是非UI模块，建议将其提取为一个单独的JavaScript模块（如函数、对象或者类），然后组件可以直接import而不需要通过extends集成它们；
 */
function Box(props) {
    return (
        <div style={{ color: props.color, border: props.border }}>{props.children}</div>
    )
}
function Left() {
    return <h1>Left</h1>
}
function Right() {
    return <h1>Right</h1>
}

class Main extends Component {
    render() {
        return (
            <div style={{ marginTop: this.props.marginTop }}>
                <h1 style={{ textAlign: "center" }}>{this.props.children}</h1>
                <div style={{ float: 'left', border: "1px solid" }}>{this.props.left}</div>
                <div style={{ float: 'right', border: "1px solid" }}>{this.props.right}</div>
            </div>
        );
    }
}

class Example11 extends Component {
    render() {
        return (
            <div>
                <Box color="red" border="1px solid">
                    <form >
                        <label>
                            姓名:
                        <input type="text" name="inputValue" />
                        </label>
                        <label>
                            评论:
                        <textarea name="texareaValue" />
                        </label>
                        <label>
                            水果清单:
                        <select name="selectValue" >
                                <option value="grapefruit">葡萄柚</option>
                                <option value="lime">酸橙</option>
                                <option value="coconut">椰子</option>
                                <option value="mango">芒果</option>
                            </select>
                        </label>
                    </form>
                </Box>
                <Main left={<Left />} right={<Right />} marginTop="10px" >我是Main</Main>
            </div>
        );
    }
}

export default Example11;
