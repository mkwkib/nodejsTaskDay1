 var tripleAndFilter = arr =>{
//    yang ini belum arrow function
    return arr.map(function(value){
        return value * 3;
    }).filter(function(value){
        return value % 5 === 0;
    })
}
