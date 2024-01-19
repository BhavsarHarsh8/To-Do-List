const inputVal = document.getElementById('inputBox');
let listCointainer = document.getElementById('list-group');

function addTaskBtn(){
    if(inputVal.value == ''){
        alert("Please Enter Your Task First");
    }
    else{
        let paragraph = document.createElement("p");
        paragraph.classList.add('paragraph-styling')
        paragraph.innerText = inputVal.value;
        listCointainer.appendChild(paragraph);

        let btn = document.createElement("button");
        btn.classList.add('button-styling')
        btn.innerText = "X";
        paragraph.appendChild(btn);

        btn.addEventListener('click',()=>{
            listCointainer.removeChild(paragraph);
            saveData();
        })
        
        saveData(); 

        paragraph.addEventListener('click', () => {
            paragraph.style.textDecoration = "line-through";
            saveData();
        })

        // paragraph.addEventListener('dblclick',()=>{
        //     listCointainer.removeChild(paragraph);
        //     saveData();
        // })
    }
    inputVal.value="";
}   

function saveData() {
    localStorage.setItem("data",listCointainer.innerHTML)
}
// function showData(){
//     listCointainer.innerHTML = localStorage.getItem("data");
// }
// showData();