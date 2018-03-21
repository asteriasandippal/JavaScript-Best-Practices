// let ui = {
//     status: {
//         _element : document.getElementById('status-element'),
//         setStatus: function(value) {
//             this._element.innerHTML = value;
//         }
//     },
//     toasts: {

//     }
// };

// ui.status.setStatus('A new Status Value');

// ui.status = null;

// ui.status.setStatus('Hello there');

let uiBlock = {};
Object.defineProperty(uiBlock, "status", {
    value: Object.defineProperties({}, {
        _element: {
            value: document.getElementById("status-element"),
            writable: false
        },
        setStatus: {
            value: function(value) {
                this._element.innerHTML = value;
            },
            writable: false
        }
    }),
    writable: false,
});

uiBlock.status.setStatus('A new Status Value');

uiBlock.status = null;

uiBlock.status.setStatus('Hello there');