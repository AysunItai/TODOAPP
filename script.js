const todoInput=document.querySelector('.todo__input');
const todoList=document.querySelector(".todo__list");
const todoItems=document.querySelectorAll(".todo__item");




function createListElement(text){
    const newListItem=document.createElement("li");
    newListItem.innerText=text;
    return newListItem;
}
todoList.addEventListener("click",function(e){
    
    if(e.target.classList.contains("todo__item")){
        e.target.classList.toggle("done");
        if(e.target.classList.contains("done")){
        const button=document.createElement("button");
        button.innerText='Delete';
        button.classList.add("btn")
        e.target.appendChild(button);
        }
        else{
            var elem = document.querySelector('button');
            elem.remove();
        }
        const button=document.querySelector("button")
        button.addEventListener("click",function(){
            e.target.remove();
    
        })
    }
})

todoInput.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        let x=new createListElement(todoInput.value);
        x.setAttribute('class','todo__item');
        todoList.insertBefore(x,todoList.childNodes[0]);
       todoInput.value="";
    
    }
})


