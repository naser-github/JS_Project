'use strict';

//1

const camelCase = function(variables){
    for (const variable of variables){
        let splitVar = variable.split('_');
        let camelVar = [];
        for(const splits of splitVar)
            camelVar.push(splits.replace(splits[0], splits[0].toUpperCase() ) );
        
        camelVar = camelVar.join('').replace(camelVar[0],camelVar[0].toLowerCase() );
        console.log(camelVar);
    }
}

//2
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').textContent= 'Click';

document.querySelector('button').addEventListener('click',function(){
    let val = [];
    const value = document.querySelector('textarea').value;
    val = value.split('\n');
    //console.log(val);
    camelCase(val);
});



//3
