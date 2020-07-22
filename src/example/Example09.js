import React, { Component } from 'react';
/**
 * 表单组件
 *   受控组件:在HTML中表单组件中的value都是通常自己维护state，然后根据用户的输入来改变输入值，但是这个时候React中的state的值是通过setState来改变，这种被React以这种方式控制取值的表单输入元素我们称之为受控组件;
 *   非受控组件:由于受控组件使用起来很麻烦,都是根据state的控制来控制对应的value，所以有一套替代方案，使用非受控组件，表单提交交由DOM节点来处理;
 *   官方推荐一套完整的form解决方案:Formik
 */
class Example09 extends Component {
    constructor() {
        super()
        this.state = { inputValue: "", texareaValue: "最初是最苦的时候 最苦的时候一定是最酷的时候", selectValue: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handUncontrolledSubmit = this.handUncontrolledSubmit.bind(this);
        this.input = React.createRef()
        this.textarea = React.createRef()
        this.select = React.createRef()
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();
    }
    handUncontrolledSubmit(event) {
        console.log('A name was submitted: ', this.input.current.value);
        console.log('A name was submitted: ', this.textarea.current.value);
        console.log('A name was submitted: ', this.select.current.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <span>----------------受控组件--------------------------</span>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        姓名:
                        <input type="text" value={this.state.inputValue} onChange={this.handleChange} name="inputValue" />
                    </label>
                    <label>
                        评论:
                        <textarea value={this.state.texareaValue} onChange={this.handleChange} name="texareaValue" />
                    </label>
                    <label>
                        水果清单:
                        <select name="selectValue" value={this.state.selectValue} onChange={this.handleChange}>
                            <option value="grapefruit">葡萄柚</option>
                            <option value="lime">酸橙</option>
                            <option value="coconut">椰子</option>
                            <option value="mango">芒果</option>
                        </select>
                    </label>
                    <button type="submit">提交</button>
                </form>
                <span>---------------非受控组件---------------------------</span>
                <form onSubmit={this.handUncontrolledSubmit}>
                    <label>
                        姓名:
                        <input type="text" ref={this.input} />
                    </label>
                    <label>
                        评论:
                        <textarea ref={this.textarea} defaultValue="最初是最苦的时候 最苦的时候一定是最酷的时候" />
                    </label>
                    <label>
                        水果清单:
                        <select ref={this.select}>
                            <option value="grapefruit">葡萄柚</option>
                            <option value="lime">酸橙</option>
                            <option value="coconut">椰子</option>
                            <option value="mango">芒果</option>
                        </select>
                    </label>
                    <button type="submit">提交</button>
                </form>
            </div>
        );
    }
}

export default Example09;
