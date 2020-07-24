import React, { Component } from 'react';
import { withHighjacking } from './WrappedComponent';
@withHighjacking
class MainForm extends Component {
    constructor(props) {
        super();
        this.state = { texareaValue: "最初是最苦的时候 最苦的时候一定是最酷的时候", selectValue: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    评论:
                    <textarea value={this.state.texareaValue} onChange={this.handleChange} name="texareaValue" />
                </label>
                <br />
                <label>
                    水果清单:
                    <select name="selectValue" value={this.state.selectValue} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <br />
                <button type="submit">提交</button>
            </form>
        );
    }
}

export default MainForm;
