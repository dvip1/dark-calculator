var cal_buttons = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'plus', 'sub', 'mul', 'div', 'equal', 'C'];
for(var i=0; i< cal_buttons.length; i++){
  add_listner(cal_buttons[i]);
    } 
function add_listner(variable){
    document.querySelector("."+variable).addEventListener("click", function(){
        document.querySelector("p").innerText+=text_to_num(variable);
        if(text_to_num(variable)=="C"){
            document.querySelector("p").innerText="";
        }
        else if(text_to_num(variable)=="="){
            var sum=document.querySelector("p").innerHTML;
            sum=sum.slice(0, -1);
            document.querySelector("p").innerText=eval(sum);
        }
})};

function text_to_num(val){
    if(val=="one")return 1;
    else if(val=="two")return 2;
    else if(val=="three")return 3;
    else if(val=="four")return 4;
    else if(val=="five")return 5;
    else if(val=="six")return 6;
    else if(val=="seven")return 7;
    else if(val=="eight")return 8;
    else if(val=="nine")return 9;
    else if(val=="zero")return 0;
    else if(val=="plus")return "+";
    else if(val=="sub")return "-";
    else if(val=="mul")return "*";
    else if(val=="div")return "/";
    else if(val=="equal")return "=";
    else if(val=="C")return "C";
}
var sum=eval(document.querySelector("p").innerText);