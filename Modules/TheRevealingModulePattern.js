let calculation = (function(){
    let memory = [];
    let store = true;

    function storeResult(result) {
        if (store) {
            memory.push(result);
        }
        console.log(memory);
    }

    function add(a, b) {
        let result = a + b;
        storeResult(result);

        return result;
    };
    function substract(a, b) {
        let result = a - b;
        storeResult(result);

        return result;
    };

    return {
        get store() {
            return store;
        },
        set store(value) {
            store = value
        },
        add,
        substract
    };
})();

calculation.add(4, 5);
calculation.store = false;
calculation.add(14, 5);
