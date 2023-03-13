const sum = (arr) =>{
    let s = 0
    arr.forEach(element => {
        s+=element
    });
    return s;
}
module.exports = sum;