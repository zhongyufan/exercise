import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            select: '',
        };
    }

    handleSubmit(e) {
        alert(`name: ${this.state.value}`)
        e.preventDefault()
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSelect(e) {
        this.setState({
            select: e.target.value
        })
    }

    render() {
        let hobbies = ['', '代码', '洗澡', '睡觉', '打游戏']
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    名字：
                     <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}></input>
                </label>
                <br />
                <label>
                    爱好：
                    <select value={this.state.select} onChange={(e) => this.handleSelect(e)}>
                        {
                            hobbies.map((item, idx) => {
                                if (idx === 0) {
                                    return <option style={{ display: 'none' }} value={item}>{item}</option>
                                } else {
                                    return <option value={item}>{item}</option>
                                }
                            })
                        }
                    </select>
                </label>
                <br />
                <label>
                    输入检测：{this.state.value} | {this.state.select}
                </label>
                <br />
                <input type="submit" value="提交"></input>
            </form>
        )
    }
}

export default Form
