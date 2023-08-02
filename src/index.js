module.exports = function reverse (n) {
    let res = Math.abs(n);
    let result = Array.from(String(res)).reverse().join('');
    return Number(result);
}
