let content = document.querySelectorAll(".font-size");

let massif = [];
massif = Array.from(content);

let elementBook = document.getElementById("book");
let elementOrig = elementBook.className;

let onClickFunc = function() {
    let res = massif.findIndex(function(item) {
        return item.className.includes("font-size_active");
    });
    if(res >= 0) {
        let element = massif[res];
        element.className = element.className.replace(" font-size_active", "");
    }
    this.className += " font-size_active";
    res = massif.indexOf(this);

    if(res == 0) {
        elementBook.className = elementOrig + " book_fs-small";
    }
    else if(res == 1) {
        elementBook.className = elementOrig;
    }
    else if(res == 2) {
        elementBook.className = elementOrig + " book_fs-big";
    }

    return false;
}
for (let i = 0; i < massif.length; i++) {
    let element_2 = massif[i];
    element_2.onclick = onClickFunc;
}