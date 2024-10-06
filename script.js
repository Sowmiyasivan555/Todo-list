var u1=document.getElementById("list-container")
var input=document.getElementById("one")

    function add()
        {
         var list=document.createElement("li")
         list.innerHTML=input.value+"<button onclick='del(event)' id='btn'>delete</button>"
         u1.append(list)
        }
        function del(event)
        {
         event.target.parentElement.remove()
        }
    