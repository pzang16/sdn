function add(x,y){
    return x+y;
}

const sub = (x,y) => {
    return x-y;
}

const mul = (x,y) => x*y;

function showData(data) {
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        console.log(`ID: ${user.id}, Name: ${user.Name}, Age: ${user.Age}`);
    }
}

export {add, sub, mul, showData}