export default function toString(obj) {
    return JSON.stringify(obj, function(key, val) {
        if (typeof val === 'function') {
            return `~--demo--~${val}~--demo--~`;
        }
        return val;
    }).replace('\"~--demo--~', '').replace('~--demo--~\"', '').replace(/\\n/g, '').replace(/\\\"/g,"\"");//最后一个replace将release模式中莫名生成的\"转换成"
}
