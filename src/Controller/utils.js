export {createElement};

function createElement(tag, id = "", classes = [], text = "") {
    const el = document.createElement(tag);
    if (id) el.id = id;
    if (Array.isArray(classes)) el.classList.add(...classes);
    else if (classes) el.classList.add(classes); // If a single string is given
    if (text) el.textContent = text;
    return el;
}

