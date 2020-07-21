import React, { Component } from 'react';
/**
 *  无障碍功能:accessibility,即为残疾人士提供便利的辅助功能
 *  aria:accessible rich internet applications 是WAI-ARIA(是一个为残疾人士等提供无障碍访问技术)的一部分；
 */
class HOExample01 extends Component {
    render() {
        return (
            <div>
                <input type="text" aria-label="名字" aria-required="true" />
            </div>
        );
    }
}

export default HOExample01;
