import React from 'react';

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggle: true };

        // 1、
        // this.handleClick = this.handleClick.bind(this);
    }

    // 1、2、
    // handleClick() {
    //     this.setState(state => ({
    //         isToggle: !state.isToggle
    //     }))
    // }

    // 3、
    handleClick = () => {
        this.setState(state => ({
            isToggle: !state.isToggle
        }))
    }

    deleteRow = (id) => {
        console.log(id)
    }

    render() {
        return (
            <div>
                {/* 1、3、 */}
                <button onClick={this.handleClick}>
                    {/* 2、 作为prop传入子组件可能会导致重新渲染 */}
                    {/* <button onClick={() => this.handleClick()}> */}
                    {this.state.isToggle ? 'ON' : 'OFF'}
                </button>
                {/* 参数传递 */}
                {/* <button onClick={(e) => this.deleteRow(1, e)}> */}
                <button onClick={this.deleteRow.bind(this, 1)}>
                    Delete Row
                </button>
            </div>
        )
    }
}

export default Switch;