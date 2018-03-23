(function() {
    let box = document.querySelector(".content-box");

    function createFunction() {
        let frag = document.createDocumentFragment();
        let div = document.createElement("div");
        div.className = "content-box";
        div.innerHTML = "<h2>Heading H2</h2><p>There is the some content</p>";
    
        frag.appendChild(div);

        document.body.appendChild(frag);
    }

    createFunction();

    function detach(element, fn) {
        let parent = element.parentNode;
        let sibling = element.nextSibling;

        fn.call(element);

        parent.insertBefore(element, sibling);
    }

    detach(box, function() {
        for (let index = 0; index < 10; index++) {
            const element = document.createElement("p");
            element.innerHTML = `This is paragraph ${index}`;

            this.appendChild(element);
        }
    })







})();