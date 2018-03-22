// let calculator = (function() {
//     let memory = [];

//     return {
//         store: true,
//         add: function(a, b) {
//             let result = a + b;
//             if(this.store) {
//                 memory.push(result);
//             }
//             return result;
//         },
//         substract: function(a, b) {
//             let result = a - b;
//             memory.push(result);
//             return result;
//         }
//     }
// })();

// console.log(calculator.add(3, 4));
// console.log(calculator.store);

let calculation = (function(){
    let memory = [];
    let calc = {};

    function storeResult(result) {
        if (this.store) {
            memory.push(result);
        }
        console.log(memory);
    }

    calc.store = true;
    calc.add = function(a, b) {
        let result = a + b;
        storeResult(result);

        return result;
    };
    calc.substract = function(a, b) {
        let result = a - b;
        storeResult(result);

        return result;
    };

    return calc;
})();

console.log(calculation.add(4, 5));
calculation.store = false;
console.log(calculation.add(14, 5));
