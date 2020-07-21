import React, { Component } from 'react';

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
        this.setState({ hasError: true });
    }
    render() {
        const { hasError } = this.state;
        if (hasError) {
            return <h1>Something went wrong!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundaries;
