class Counter {
    constructor(element) {
        this._element = element;
        this._count = 0;

        this.init();
    }

    init() {
        // this._element.addEventListener("click", this.increment.bind(this));

        this._element.addEventListener("click", () => {this.increment();});
    }

    increment() {
        console.log(this);
        this._count ++;
        
        this._element.innerHTML = `Count: ${this._count}`;
    }
}

let counter = new Counter(document.getElementById("button-count"));

counter.increment();