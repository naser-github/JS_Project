const a = {
    name: 'abc',
};

const x = {
    name: 'xyz',
};

const c = {
    name:'change'
};

const merge = {
    a,
    x,
    change: c,
};

//console.log(merge);

const weekdays = ['sun','mon','tue','wed','thu','fri','sat'];

for (day of weekdays){
    //console.log(day);
}
const res = [];
//console.log(res[0]?.names ?? 'not exist');

const obj = {
    openingHours:{
        fri : {
            open: 12,
            close:20,
        },
        sat : {
            open: 12,
            close:20,
        },
        sun : {
            open: 12,
            close:20,
        },
    }
};

//to get only values
const value = Object.values(obj.openingHours);
//console.log(value);

//to get key & values
const entries = Object.entries(obj.openingHours);
//console.log(entries);

for ([key, {open,close}] of entries){
    console.log(`we open on ${key} at ${open} & close at ${close}`)
}

