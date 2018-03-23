(function() {
    document.addEventListener("dblclick", function(e) {
        let target = e.target;
        if(!target.matches(".content-box")) {
            return;
        }

        // target.style.color = "yellow";
        // target.style.backgroundColor = "blue";
        // target.classList.add("dbl-click");
        target.classList.toggle("dbl-click");
        
    });
})();