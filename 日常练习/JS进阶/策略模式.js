const TYPE = {
    JUICE: '🍹',
    SALAD: '🥗',
    TEA: '🍵'
}

const model = {
    [TYPE.JUICE](fruits) {
        console.log('🏭>>>🍉>>>🍹');
        return '果汁';
    },
    [TYPE.SALAD](fruits) {
        console.log('🏭>>>🍇>>>🥗');
        return '沙拉';
    },
    [TYPE.TEA](fruits) {
        console.log('🏭>>>🍒>>>🍵');
        return '果茶';
    }
}

function enjoy({ type = TYPE.JUICE, fruits }) {
    if (!type) {
        console.log('请直接享用！');
        return;
    }
    if (!fruits || !fruits.length) {
        console.log('请先采购水果！');
        return;
    }
    return model[type](fruits);
}

enjoy({ type: '🥗', fruits: ['草莓', '香蕉'] })