const mul = (arr) =>{
    let s = 1
    arr.forEach(element => {
        s*=element
    });
    return s;
}
module.exports = mul;