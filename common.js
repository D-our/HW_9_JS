    const addBtnEl = document.getElementById("addToDoListItem");
    const listEl = document.getElementById('toDoItems');

    // let inputTextEl = document.getElementById('inputText').value;  ------ why with inputTextEl in <li> it doesn`t work? -------


    addBtnEl.addEventListener('click', addLi);



    function addLi() {

        listEl.innerHTML += `<li>${document.getElementById('inputText').value}</li>`;


    }

