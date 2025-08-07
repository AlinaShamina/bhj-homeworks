let content = document.querySelectorAll(".card");
let massif_2 = [];
massif_2 = Array.from(content);

content = document.querySelectorAll(".rotator__case");
let massif_1 = [];
massif_1 = Array.from(content);

massif_3 = [];
massif_4 = [];
for(let i = 0; i < massif_2.length; i++) {
  massif_3[i] = 0;
  for(let j = 0; j < massif_1.length; j++) {
    if(massif_1[j].closest(".card") == massif_2[i]) {
      massif_4[i, massif_3[i]] = massif_1[j];
      massif_3[i]++;
    }
  }
}

let fbFunc = function() {
    for(let i = 0; i < massif_2.length; i++) {
      let res = massif_1.findIndex(function(item) {
          return item.className.includes("rotator__case_active") &&
          (item.closest(".card") == massif_2[i]);
          
      });
      if(res >= 0) {
        let element = massif_1[res];
        element.className = "rotator__case";
        if(res < massif_3[i] - 1) {
          res++;
        }
        else {
          res = 0;
        }
        element = massif_4[i, res];
        element.className += " rotator__case_active";
      }
    }

    return false;
}

window.setInterval(fbFunc, 1000);