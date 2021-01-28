import React, { useState, useEffect } from 'react'

export default function Example() {
    const [count, setCount] = useState(0);
    // const [todo, setTodo] = useState([{ text: 'test' }]);

    useEffect(() => document.title = `点击次数：${count}`)

    return (
        <div style={{ margin: '40px' }}>
            <p>点击次数：{count}</p>
            <button onClick={() => setCount(count + 1)}> + </button>
            <button onClick={() => setCount(count - 1)}> - </button>
        </div>
    )
}