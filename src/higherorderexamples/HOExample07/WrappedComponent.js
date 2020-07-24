import React, { Component, Fragment } from 'react';
import _ from 'lodash';
/**
 * 标准的HOC封装，传递通用属性以及公用样式
 * @param {*} WrappedComponent 
 */
export function withSubscription(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { width: 300 };
            this.handleResize = this.handleResize.bind(this);
        }
        handleResize(e) {
            this.setState({ width: e.target.innerWidth / 3 })
        }
        componentDidMount() {
            // ...负责订阅相关的操作...
            window.addEventListener('resize', this.handleResize) //监听窗口大小改变
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize)
        }
        render() {
            let publicStyle = {
                width: this.state.width,
                height: "100%",
                border: "1px solid red",
                textAlign: "center",
                fontSize: "20px"

            };
            return <WrappedComponent  {...this.props} publicStyle={publicStyle} />
        }
    }
}
/**
 * refs转发
 * @param {*} WrappedComponent 
 */
export function withRefs(WrappedComponent) {
    class NewComponent extends Component {
        constructor(props) {
            super();
            console.log(props);
        }
        render() {
            const { forwardRef, ...rest } = this.props;
            return <WrappedComponent ref={forwardRef} {...rest} />
        }
    }
    return React.forwardRef((props, ref) => {
        return <NewComponent {...props} forwardRef={ref} />
    })
}
/**
 * state提升
 * @param {*} WrappedComponent 
 */
export function withContolledInput(WrappedComponent) {
    return class NewComponent extends Component {
        constructor(props) {
            super();
            this.state = { address: '' };
            this.onNameChange = this.onNameChange.bind(this);
        }
        onNameChange(event) {
            console.log(event.target.value)
            this.setState({ address: event.target.value })
        }
        render() {
            const newProps = {
                address: {
                    value: this.state.value,
                    onChange: this.onNameChange
                }
            };
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}
/**
 * 渲染劫持(Render Highjacking)
 * @param {*} WrappedComponent 
 */
export function withHighjacking(WrappedComponent) {
    class NewComponent extends WrappedComponent {
        constructor(props) {
            super();
            this.childElement = [];
            this.findChild = this.findChild.bind(this);
        }
        findChild(elements, type, index = 0) {
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].type === type) {
                    // 这个地方不能直接跟叶子节点的props赋值,因为原始的props是不能直接修改的
                    //  会报:Cannot assign to read only property 'props' of object '#<Object>'
                    // elements[i].props.value = value;或者elements[i].props = props;
                    this.childElement.push(i);
                } else {
                    if (_.get(elements[i], "props.children")) {
                        this.findChild(_.get(elements[i], "props.children"), type);
                    }
                }
            }
        }
        render() {
            const { selectValue } = this.state;
            if (selectValue === "mango") {
                return null
            }
            /* if (selectValue === "coconut") {
                const elementTree = super.render();
                let elements = _.get(elementTree, "props.children") || [];
                if (elements.length > 0) {
                    this.findChild(_.cloneDeep(elements), "textarea", "You've been hijacked");
                    console.log(this.childElement);
                }
            } */
            if (selectValue === "lime") {
                console.log(this)
                return (
                    <Fragment>
                        <p>我是新加入的元素</p>
                        <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
                        <p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
                        <button onClick={this.handleSubmit}>点下</button>
                        {super.render()}
                    </Fragment>
                )
            }
            return super.render()
        }
    }
    NewComponent.displayName = `NewComponent(${getDisplayName(WrappedComponent)})`;
    return NewComponent;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}