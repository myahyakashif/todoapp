var data = [];
var add1 = document.getElementById('input');
var addbtn = document.getElementById('addBtn');
var list = document.getElementById('list');
var deltBtn = document.createElement('button');
var editBtn = document.createElement('button');
var clear =  document.getElementById('clear');

var editIndex;


var i = 0;

function add() {
    if (add1.value === ''){
        alert('Please Type Some Value')
    }
    else {
        data.push(add1.value);
    }
    add1.value = '';
    render();
 clear.style.display = 'inline';

}

function render() {
    list.innerHTML = '';
    for ( i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        var div = document.createElement('div');
        var text = document.createTextNode(data[i]);
        deltBtn = document.createElement('button');
        editBtn = document.createElement('button');

       deltBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
       editBtn.innerHTML = `<i class="fas fa-edit"></i>`;


       li.className= 'li';
       deltBtn.className = 'childBtn'
       editBtn.className = 'childBtn'
        div.className = 'todoStyle'

        deltBtn.setAttribute(`onclick`,'deleteTodo(' + i + ')');
        editBtn.setAttribute(`onclick`,'editTodo(' + i + ')');


        li.appendChild(text);
        list.appendChild(li);
        div.appendChild(deltBtn)
        div.appendChild(editBtn)
        li.appendChild(div);

    }



    console.log(data);
}
    function clears() {
        data = []
        render()
    }




function deleteTodo(todiIndex) {

    data.splice(todiIndex,1);
    render()
}
function editTodo(todiIndex) {
    editIndex = todiIndex;
    add1.value = data[todiIndex];
    addbtn.innerHTML = '<i class="fas fa-edit"></i>';
    addbtn.setAttribute('onclick', 'saveTodo()');
}

function saveTodo() {
    data[editIndex]=  add1.value;
    add1.value = '';
    addbtn.innerHTML = '+';
    addbtn.setAttribute('onclick', 'add()');
    render();
}