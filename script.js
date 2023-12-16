let cartId_track = 0;
let comptag =0;

let todolist =[];
let addtodo_btn = document.getElementById('addbutton');



addtodo_btn.addEventListener("click" ,(e)=>{
    let todoojb = {
        todoname : document.getElementById('textinput').value,
        tododate : document.getElementById("dateinput").value,
        todopriority : document.getElementById('priority_level').value
    }
    todolist.push(todoojb);
    
    addTodoTaskFunction();

});
function addTodoTaskFunction(){
    if(document.getElementById('textinput').value === "" ){
        alert("fill the correct information");
    }
    else{
        cartId_track++;
        document.getElementById("uptodotagcount").innerText = cartId_track;
        document.getElementById("todotagcount").innerText = cartId_track;
        addCartsToSection();
         
    }
}

function createtodocart(list){


    let todoCart = document.createElement('div');
    
    todoCart.id = "todoCart";
    

    let inputdiv = document.createElement('div');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkDone";
    todoCart.appendChild(inputdiv);
    inputdiv.appendChild(checkbox);

    let pdiv = document.createElement('div');
    pdiv.id ="todonamediv";
    let ptag = document.createElement('p');
    ptag.id = "todoname";
    ptag.innerHTML= `<p>${list.todoname}</p>`
    todoCart.appendChild(pdiv);
    pdiv.appendChild(ptag);

   
    let editbtn = document.createElement('button');
    editbtn.className = "material-symbols-outlined";
    editbtn.id = "editbtn";
    editbtn.innerText = "edit";

    let deletebtn = document.createElement('button');
    deletebtn.className = "material-symbols-outlined";
    deletebtn.id = "deletebtn";
    deletebtn.innerText = "delete";
   
    todoCart.appendChild(editbtn);
    todoCart.appendChild(deletebtn);
    deletebtn.addEventListener("click",(e)=>{
        todoCart.remove();
        cartId_track--;
        document.getElementById("uptodotagcount").innerText = cartId_track;
        document.getElementById("todotagcount").innerText = cartId_track;
    });
    checkbox.addEventListener("change",(e)=>{
        if (checkbox.checked){
            ptag.style.textDecoration="line-through";
            cartId_track--;
            comptag++;
            document.getElementById("Completedtagcount").innerText = comptag;
            document.getElementById("uptodotagcount").innerText = cartId_track;
            document.getElementById("todotagcount").innerText = cartId_track;
          } else {
            ptag.style.textDecoration="none";
            cartId_track++;
            comptag--;
            document.getElementById("Completedtagcount").innerText = comptag;
            document.getElementById("uptodotagcount").innerText = cartId_track;
            document.getElementById("todotagcount").innerText = cartId_track;
          }
    });
    editbtn.addEventListener("click",(e)=>{
        let beforeEdit = document.getElementById('todoname').innerText;
        
        let edittext = prompt("Edit Task",beforeEdit);
        if(edittext != ""){
            ptag.innerText= edittext;
            for(let obj of todolist){
                if(obj.todoname == beforeEdit){
                    obj.todoname = edittext;
                }
            }
        }
    });
  
  
    
    document.getElementById('textinput').value = "";
    document.getElementById("dateinput").value ="2023-12-16";


    return todoCart
}

function addCartsToSection(){

    const cartContauner = document.getElementById('cartcontainer');
   
    document.getElementById('cartcontainer').innerHTML = "";
    todolist.forEach(list =>{
        const todoCart =createtodocart(list);
        cartContauner.appendChild(todoCart);
    } );
}


    
