// naming nya dibuat lebih rapih, kalo array bisa dinamain arr_name
var name = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// parameter map jangan 'w' kaya gini, karena gak jelas. bisa dinamain name aja
var cap = name.map(w => w.substring(0,1).toUpperCase()+w.substring(1).toLowerCase()).join(', ')
console.log(cap)
