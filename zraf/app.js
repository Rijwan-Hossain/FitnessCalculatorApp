



let obj = {
    name: 'A', 
    id: 5
}

let arr = Object.keys(obj)

arr.map((v,i) => {
    console.log(v + ': ' + obj[v]);
})



