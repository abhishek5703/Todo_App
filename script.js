let btn = document.querySelector("button");   // making objects for button , ul and input box 
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click",function(){     // adding an event on add task button 
    let item  = document.createElement("li");  // when we click on add button , a list item will create who's innertext is equal to the text which we have given in the input box 
    item.innerText = inp.value;
    
    let delbtn = document.createElement("button");  // when the add button click , a delete button will also created along with the list item whose inner text is "delete"
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete")    // all delete button has the class delete so that all delete buttons of all list items will works similarly
    item.appendChild(delbtn);   // now for every list item , append the delete button as a child element so that the list item can be deleted
    
    ul.appendChild(item);      // now append the whole list item in our ul
    
    inp.value = "";         // when the item is added in the ul , clear the input box by setting the inputvalue to empty
});
ul.addEventListener("click" ,function(event){  //for the ul of all the items in the todo app 
    if(event.target.nodeName == "BUTTON"){   // if I click on the delete button in the list item, then only the list item will remove since the delete event will triggered only when it is a button
        let listitem = event.target.parentElement;   // here the event target is delete button and the parent of delete button is the list item of the list of todos 
        listitem.remove();      // removing the li from the list 
        console.log("delete");   // printing in console that the li is now deleted 
    }
})