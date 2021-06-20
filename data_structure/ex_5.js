'use strict';

//1

const camelCase = function(variable){
    let splitVar = variable.split('_');
    let camelVar = [];
    for(const splits of splitVar)
        camelVar.push(splits.replace(splits[0], splits[0].toUpperCase() ) );
    
    camelVar = camelVar.join('').replace(camelVar[0],camelVar[0].toLowerCase() );
    console.log(camelVar);
}

camelCase("joe_root_hold");

//2

//3
