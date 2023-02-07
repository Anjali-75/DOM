function display(){
    let a = document.getElementById("show");
    const list = document.getElementById("text");
    let li = document.createElement("li");
    li.setAttribute('id', 'common');
    li.appendChild(document.createTextNode(list.value));
    a.appendChild(li);    
 }

 document.addEventListener('click', function(e) {
        if(e.target.id == 'common'){
        let node = e.target;
        console.log(e.target.parentNode.parentNode);
        node.parentNode.removeChild(node);
        }
    })