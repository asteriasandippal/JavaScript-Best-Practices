let memory = [];
let store = true;

function showResults(result) {
    if (store) {
        memory.push(result);
    }
};

function add(a, b) {
    let result = a + b;
    return result;
};

function subtract (a, b) {
    let result = a + b;
    return result;
};

let calculator = {
    get store() {
        return store;
    },
    set store(value) {
        store = value
    },
    add,
    subtract,
};

export {calculator};
