import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(event) {
        let value = event.target.value;
        if (event.target.name === "isStockOnly") {
            value = event.target.checked;
        }
        this.props.serchChange({ name: event.target.name, value: value })
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.inputChange} name="filterText" />
                <p>
                    <input type="checkbox" checked={this.props.isStockOnly} onChange={this.inputChange} name="isStockOnly" />
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;
