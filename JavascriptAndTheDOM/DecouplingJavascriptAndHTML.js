const calculator = (function() {
    let element = document.getElementById("calculatorResult");

    function buttonPress(values) {
        if (values == "=") {
            evelResult();
            return;
        }
        element.innerHTML += values;
    }

    function evelResult() {
        element.innerHTML = eval(element.innerHTML);
    }

    document.addEventListener("click", function(e) {
        let target = e.target;

        if(!target.matches("button[data-value]")) {
            return;
        }

        buttonPress(target.getAttribute("data-value"));
    });

    return {
        buttonPress,
        eval
    }
})();