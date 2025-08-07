let content = document.querySelectorAll(".reveal");

let massif = [];

massif = Array.from(content);

let onScrollFunc = function() {
    for(i = 0; i < massif.length; i++) {
      let {top, bottom} = massif[i].getBoundingClientRect();
      if((top > (window.innerHeight / 4 )) &&
         (bottom < (window.innerHeight * 3 / 4))) {
       massif[i].className = "reveal reveal_active";
      }
      else {
        massif[i].className = "reveal";
      }
    }
    return false;
}
document.addEventListener("scroll", onScrollFunc, true);