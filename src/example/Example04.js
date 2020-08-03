import React, { Component } from 'react';
import Example03 from './Example03'
import _ from 'lodash';
/**
 * 主要讲述的是props和state的用法，以及父子组件通信的方法
 */
class Example04 extends Component {
    constructor() {
        super();
        this.state = {
            data: [{ name: "Charlie", job: "Janitor" }, { name: "Mac", job: "Bouncer" }, { name: "Dee", job: "Aspiring actress" }, { name: "Dennis", job: "Bartender" }],
            name: "",
            job: ""
        }
    }
    removeItem = (index) => {
        const { data } = this.state;
        this.setState({ data: data.filter((item, i) => { return i !== index }) })
    }
    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }
    handleSubmit = () => {
        const { name, job, data } = this.state;
        if (name && job) {
            let item = { name: _.cloneDeep(name), job: _.cloneDeep(job) };
            let newData = _.cloneDeep(data);
            newData.push(item);
            this.setState({ data: newData, job: "", name: "" });
        } else {
            alert("新增失败")
        }

    }
    render() {
        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Example03 data={this.state.data} removeItem={this.removeItem} />
                <Form onChangeInput={this.onChangeInput} formValue={{ name: this.state.name, job: this.state.job }} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
const Form = (props) => {
    return (
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" onChange={(e) => { props.onChangeInput(e) }} value={props.formValue.name} />
            <label htmlFor="job">Job</label>
            <input id="job" name="job" onChange={(e) => { props.onChangeInput(e) }} value={props.formValue.job} />
            <div style={{ margin: "10px 0 0 0" }}><button onClick={() => { props.handleSubmit() }}>新增</button></div>
        </div>
    )
}
export default Example04;
