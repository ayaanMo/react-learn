import React, { Component } from 'react';
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