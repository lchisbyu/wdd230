const input = document.getElementById("favchap");
const button = document.getElementsByTagName("button")[0];
const list = document.getElementsByClassName("list")[0];


button.addEventListener("click", function(){
    //alert(input.value != "")

    if(input.value != ""){
       const newListItem = document.createElement("li");
       const deleteButton = document.createElement("button");
       newListItem.innerHTML = input.value;
       deleteButton.textContent = "X";
       newListItem.append(deleteButton);
       list.append(newListItem);

       deleteButton.addEventListener("click", function(){
        list.removeChild(newListItem)
       })

       input.focus();

       input.value = "";


    }
    
   







}) 


