var name = ["john", "JACOB", "jinGleHeimer", "schmidt"]
var cap = name.map(w => w.substring(0,1).toUpperCase()+w.substring(1).toLowerCase()).join(', ')
console.log(cap)