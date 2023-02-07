async function api_call(){
    const id = Math.floor(Math.random() *10)+1;
    let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
    const res =  await data.json();
    display(res);
    
}
function display(res){
    document.getElementsByClassName("name")[0].innerHTML = res.name;
    document.getElementsByClassName("Email")[0].innerHTML = res.email;
    document.getElementsByClassName("Phone")[0].innerHTML = res.phone;
    document.getElementsByClassName("extra")[0].innerHTML = JSON.stringify(res);
}

function btn_click(e){
    e.target.style.backgroundColor = "coral"
    e.stopPropagation();
}


