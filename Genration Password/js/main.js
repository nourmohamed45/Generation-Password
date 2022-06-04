let form = document.querySelector(".form");
let platform = document.querySelectorAll("input")[0];
let itrNum = document.querySelector('input[name=iteration]');
let passNum = document.querySelectorAll("input")[2];
let generate = document.querySelector(".form .btns .submit");
let reset = document.querySelector(".btns .reset");
let clear = document.querySelector(".btns .clear");

generate.addEventListener("click",function(e) {
  if(platform.value === ""|| itrNum.value === "" || passNum.value === "" || passNum.value > 30 || itrNum.value > 100 || Number.isInteger(+platform.value)) {
    e.preventDefault();
  } else {
        let word = platform.value;
        // To create container of Span 
        let content = document.createElement("div");
        content.className = "content";
        // To create div of Platform Name
        let divPlatForm = document.createElement("div");
        divPlatForm.className = "namePlatform";
        form.after(divPlatForm);
        divPlatForm.textContent = `${word} :`;
        divPlatForm.after(content);
        
        // To Iterate Generating Password 
        for(let j = 0; j < itrNum.value ; j++) {
            let span = document.createElement("span");
            let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%&";
            let long = chars.length;
            let password = "";
            // To Make random value of chars
            function randValue(long) {
              return Math.floor(Math.random() * long);
            }
            for (let i = 0 ; i < passNum.value ; i++) {
              password += chars[randValue(long)];
            }
            content.appendChild(span);
            span.textContent = `(${j+1}) ${password}`;
          }
      clear.addEventListener("click", function() {
        platform.value = "";
        itrNum.value = "";
        passNum.value = "";
        divPlatForm.remove();
        content.remove();
      });
  }
  
});
  
reset.addEventListener("click", function () {
  platform.value = "";
  itrNum.value = "";
  passNum.value = "";
});