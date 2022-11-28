var cal_buttons = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'plus', 'sub', 'mul', 'div', 'equal', 'C'];
for (var i = 0; i < cal_buttons.length; i++) {
    add_listner(cal_buttons[i]);
}
function add_listner(variable) {
    document.querySelector("." + variable).addEventListener("click", function () {
        document.querySelector("p").innerText += text_to_num(variable);
        if (text_to_num(variable) == "C") {
            document.querySelector("p").innerText = "";
        }
        else if (text_to_num(variable) == "=") {
            var sum = document.querySelector("p").innerHTML;
            sum = sum.slice(0, -1);
            document.querySelector("p").innerText = eval(sum);
        }
    })
};

function text_to_num(val) {
    if (val == "one") return 1;
    else if (val == "two") return 2;
    else if (val == "three") return 3;
    else if (val == "four") return 4;
    else if (val == "five") return 5;
    else if (val == "six") return 6;
    else if (val == "seven") return 7;
    else if (val == "eight") return 8;
    else if (val == "nine") return 9;
    else if (val == "zero") return 0;
    else if (val == "plus") return "+";
    else if (val == "sub") return "-";
    else if (val == "mul") return "*";
    else if (val == "div") return "/";
    else if (val == "equal") return "=";
    else if (val == "C") return "C";
}
var sum = eval(document.querySelector("p").innerText);

document.querySelector(".dark").addEventListener("click", function () {
    document.querySelector("section").classList.toggle("container");
    document.querySelector("section").classList.toggle("container-lg");
    for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
        document.querySelectorAll(".btn")[i].classList.toggle("btn-primary");
        document.querySelectorAll(".btn")[i].classList.toggle("btn-primary-lg");
    }
    for(var i=0;i<document.querySelectorAll(".btn-s").length;i++){
        document.querySelectorAll(".btn-s")[i].classList.toggle("btn-secondary");
        document.querySelectorAll(".btn-s")[i].classList.toggle("btn-secondary-lg");
    }
    document.querySelector(".sc").classList.toggle("screen");
    document.querySelector(".sc").classList.toggle("screen-lg");
    document.querySelector(".btn-font").classList.toggle("light");
    document.querySelector(".btn-font").classList.toggle("dark");
    document.querySelector(".btn-s1").classList.toggle("equal");
    document.querySelector(".btn-s1").classList.toggle("equal-lg");
}
)