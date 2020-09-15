//栈的应用
// var x = '2+3*5-4';
var x = '1*2+3*4/2-4/2';
//四则运算式，先乘除后加减 0~9 +-*/ 没有括号
// 1、算法思路
//    不同优先级的操作符，高优先级优先
//    相同优先级的操作符，左侧优先

//栈 push-pop
//初始化
var nArray = []; // 数字
var oArray = []; // 操作符

var OPERATOR = [['+', 0], ['-', 0], ['*', 1], ['/', 1]];//常数用全大写  先乘除后加减

var nRet = 0;
var iRet = ''; //报错机制
var i = 0; //pointer to current op 指向字符串的指针

//first number 第一个数进栈
var sNToken = x.charCodeAt(0) - 48;
var sPToken = '';
var nPriority = 0;// 第二个操作符

// '0' 30h 48  '9' 39h 57
if (sNToken < 0 || sNToken > 9) {
    iRet = 'Error at position' + i + ': is not a number(' + x.charAt(i) + ')! Are you kidding me?';
}
else {
    // 初始化
    nArray.push(sNToken);
    // js i 可以跑出for外
    i = 1;
    for (; i < x.length;) {
        // 拿出操作符
        sPToken = x.charAt(i);

        // 验证操作符是不是 +-*/
        for (var j = 0; j < OPERATOR.length; j++) {
            if (OPERATOR[j][0] == sPToken) {
                break;
            }
        }
        // 操作符不符合要求
        if (j >= OPERATOR.length) {
            iRet = 'Error at position' + i + ': Syntax error: invalid operator\'' + sPToken + '\'';
            break;
        }

        // 返回操作符
        nPriority = OPERATOR[j][1];

        // 拿出第二个数
        sNToken = x.charCodeAt(i + 1) - 48;
        if (sNToken < 0 || sNToken > 9) {
            iRet = 'Error at position' + (i + 1) + ': is not a number(' + x.charAt(i) + ')! Are you kidding me?';
            break;
        }
        // compare the priority of the operator
        // 以上代码已经拿出了前面两个数和一个运算符
        // 第一个运算符与第二个运算符做比较 第一个运算符优先级比第二个运算符优先级低的时候压栈
        while (oArray.length != 0 && oArray[oArray.length - 1][1] >= nPriority) {
            //弹栈计算
            var n;
            var n2 = nArray.pop();
            var n1 = nArray.pop();
            var op = oArray.pop()[0];

            switch (op) {
                case '+':
                    n = n1 + n2;
                    break;
                case '-':
                    n = n1 - n2;
                    break;
                case '*':
                    n = n1 * n2;
                    break;
                case '/':
                    n = n1 / n2;
                    break;
            }
            if (!isFinite(n) || isNaN(n)) {
                iRet = 'Error, the result is invalid';
                break;
            } else {
                nArray.push(n);
            }
        }
        if (iRet) {
            break;
        }
        // 压栈
        nArray.push(sNToken); // 第四个数压栈
        var opPair = [];
        opPair[0] = sPToken;
        opPair[1] = nPriority;
        oArray.push(opPair);
        i += 2;

    }
    while (oArray.length != 0 && oArray[oArray.length - 1][1] >= nPriority) {
        //弹栈计算
        var n;
        var n2 = nArray.pop();
        var n1 = nArray.pop();
        var op = oArray.pop()[0];

        switch (op) {
            case '+':
                n = n1 + n2;
                break;
            case '-':
                n = n1 - n2;
                break;
            case '*':
                n = n1 * n2;
                break;
            case '/':
                n = n1 / n2;
                break;
        }
        if (!isFinite(n) || isNaN(n)) {
            iRet = 'Error, the result is invalid';
            break;
        } else {
            nArray.push(n);
        }
    }
}
// check  检查
if (iRet) {
    console.log(iRet);
    // Error happens.---------to be added-----------
} else {
    console.log(nRet = nArray.pop());
}