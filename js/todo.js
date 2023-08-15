const UnorderList = document.getElementById("unorder-List").addEventListener("click", event=>{
    event.target.parentNode.removeChild(event.target);
})


  document.getElementById("input-Box").addEventListener("keyup",(event)=>{
    if (event.key === 'Enter'){
        const inputBox = document.getElementById("input-Box");
        const InputText = inputBox.value;
        const UnorderList = document.getElementById("unorder-List");
        const li = document.createElement("li");
        if(InputText === null || InputText === ''){
            alert("Please provide valid things");
            return;
        }
        li.innerText = InputText;
        UnorderList.appendChild(li);
        inputBox.value = "";
    }
  });

  document.getElementById("add-Btn").addEventListener("click",()=>{
    const inputBox = document.getElementById("input-Box");
const InputText = inputBox.value;
const UnorderList = document.getElementById("unorder-List");
const li = document.createElement("li");
if(InputText === null || InputText === ''){
    alert("Please provide valid things");
    return;
}
li.innerText = InputText;
UnorderList.appendChild(li);
inputBox.value = "";
});


  document.getElementById("listReset-Btn").addEventListener("click",()=>{
    document.getElementById("unorder-List").innerHTML = "";
  });