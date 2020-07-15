import React, { Component } from 'react';

class Example02 extends Component {
    render() {
        return (
            <table style={{ border: "1px solid" }}>
                <thead>
                    <tr>Name</tr>
                    <tr>Job</tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>Bouncer</td>
                    </tr>
                    <tr>
                        <td>Dee</td>
                        <td>Aspiring actress</td>
                    </tr>
                    <tr>
                        <td>Dennis</td>
                        <td>Bartender</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Example02;
