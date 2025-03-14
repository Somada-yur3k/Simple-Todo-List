const Todoinput = document.querySelector("#input");
const Tododate = document.querySelector("#date");
const TodoDisplay = document.querySelector("#display");

// Todo Object Container
const Todolist = [{
  data: 'Time Sleep',
  date: '2022-12-22'
},
{
  data: 'Playgames',
  date: '2022-13-22',
}];

runTodoList();
// key " Enter " Function to add Todo
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    todoadd();
  }
});

//  Todo Object tranfering to HTML
function runTodoList() {
  let todolistHTML = "";

  for (let i = 0; i < Todolist.length; i++) {
    const todoObject = Todolist[i];
    //const name = todoObject.name;
    //const date = todoObject.date;
    // Use 'Destructuring' shortcut method
    const {data, date} = todoObject;
    const html = `<a class=" mb-3 ml-auto " >${data} ${date} 
    <button onclick=" 
    Todolist.splice(${i}, 1);
     runTodoList();" 
    class="bg-[#3a103f]  text-white text-[25px] w-[100px] h-[60px] font-mono  rounded-[20px] inset-shadow-sm inset-shadow-indigo-500/50 hover:bg-[#421145]"> 
    Delete
    </button> 
    </a>`;
    todolistHTML += html;
  }
  console.log(todolistHTML);
  //Display todo Object in to Html;
  TodoDisplay.innerHTML = todolistHTML;
}

// Button function add todo
function todoadd() {
  const data = Todoinput.value;
  const date = Tododate.value;
  // Should have both same Identifier in your Object and stored data
  //  to use this shortcut .push method
  Todolist.push({ data, date});
  
  console.log(Todolist);

  Todoinput.value = "";
  runTodoList();
}
