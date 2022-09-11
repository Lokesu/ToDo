
var para=document.getElementsByTagName("p");
var list=document.getElementsByTagName("li");
var i;
let arr=[];//for counting the list elements
for(i=0;i<list.length;i++)
{
    arr.push(1);
}
  //count list elements and shows it on remaining tasks
document.getElementById("task").innerHTML=arr.length;

//when user clicks on "clear all" button
function erase()
{
len=list.length;
    for(i=0;i<len;i++)
    {
        list[i].style.display="none";
        arr.pop();
    }
    document.getElementById("task").innerHTML=arr.length;
}

// delete elements from the list if not added any elements before

 sp=document.getElementsByClassName("x");
for(var i=0;i<=sp.length;i++)
{

    sp[i].onmouseover=function(){
        this.style.color="red";
    }
    if(i%2==0){
    sp[i].onmouseout=function(){
        this.style.color="white";
    }
}

    else
    {
        sp[i].onmouseout=function(){
            this.style.color=" white";
        }
    }
   {
      list[i].addEventListener('click', function() {
            this.classList.toggle('checked');
            if(this.classList.contains('checked')){
                arr.pop();
                document.getElementById("task").innerHTML=arr.length;
            }
            else{
                arr.push(1);
                document.getElementById("task").innerHTML=arr.length;
            }
        
        
      }, false);

    }


}


//add elements in the todolist as well as deleting elements and accordingly change number of remaining tasks left
function func(){
    //step1:creation of a new list when user clicks + button
     var input=document.getElementById("input").value;
var para=document.createElement("p");
var li=document.createElement("li");
var ul=document.getElementById("myul");
input_node=document.createTextNode(input);
para.appendChild(input_node);
li.appendChild(para);
if(input=='') 
alert("Enter something!!");
else
{
ul.appendChild(li);
}
document.getElementById("input").value="";
//cross mark for deleting elements from the list
var span=document.createElement("span");
span.className="x";
var cross=document.createTextNode("x");
span.appendChild(cross);
para.appendChild(span);
span.style.color="transparent";
span.style.cursor="pointer";

var lis=document.getElementsByTagName("li");
arr.push(1); //since we created a new list hence we add a new number to array to increase its count by 1 as in the list
document.getElementById("task").innerHTML=arr.length; //to show the number of tasks left after updating it
var sp=document.getElementsByClassName("x");
//when user tries to hover over "x" and click on "x"
for(var i=0;i<sp.length;i++)
{
    
    if(i%2==0)
    sp[i].style.color="rgb(236, 192, 236)";
    else
    sp[i].style.color="rgb(201, 16 2, 230)";
    sp[i].onmouseover=function(){
        this.style.color="red";
    }
    if(i%2==0){
        
    sp[i].onmouseout=function(){
        this.style.color="rgb(236, 192, 236)";
    }
}
    else
    {
        sp[i].onmouseout=function(){
            this.style.color="rgb(201, 162, 230)";
          
        }
    }
   }
//user clicks on the list element and he is done with it ,result of which tick shows over there and that list 
//needs to be excluded in remaining tasks
li.addEventListener('click', function() {
    this.classList.toggle('checked');
    if(this.classList.contains('checked')){
        arr.pop();
        document.getElementById("task").innerHTML=arr.length;
    }
    else{
        arr.push(1);
        document.getElementById("task").innerHTML=arr.length;
    }


}, false);
span.addEventListener('click',del); //user clicks on "x"
function del(){
   
  this.parentElement.parentElement.style.display="none";
  var arr=document.getElementsByTagName("li");
  arr.pop();
  document.getElementById("task").innerHTML=arr.length;
}

}
