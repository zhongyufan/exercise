import React from 'react';

function Boil(props) {
    if ((props.scale === 'c' && props.celsius >= 100) || (props.scale === 'f' && props.celsius >= 212)) {
        return <p>是开水💧</p>
    }
    return <p>还没开❄️</p>
}

export default Boil