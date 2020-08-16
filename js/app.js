
window.onload=fetchFromDatabase()

let newTask=document.getElementById("new-task")

let incompleteTasks=document.getElementById("incomplete-tasks")
let edit_Value=document.getElementById("editValue")


let databaseName='ToDo/'

let fetchData
let newData
let getId

// insert to database
let key =firebase.database().ref(databaseName).push().key
function addToDatabase(){

  const task={
    text: newTask.value,
    key:key


  }
firebase.database().ref(databaseName+key).set(task)
newTask.value=""
fetchFromDatabase()
}


// fetch from database
function fetchFromDatabase(){

  firebase.database().ref("ToDo").on('value',function(data){
    fetchData=data.val()


    for (var key in fetchData) {
      for (var key2 in fetchData[key]) {
        newData=fetchData[key].text;
        getId=fetchData[key].key;

      }
      addTask(newData,getId)
    }

  })

}

function addTask(newText,getKey){

    let li = document.createElement("li")

    //create label
    let lbl = document.createElement("label")
    let lblText = document.createTextNode(newText)
    lbl.setAttribute('id', 'textLbl')


    lbl.appendChild(lblText)
    li.appendChild(lbl)

    //create text input
    let textInput = document.createElement("input")
    textInput.setAttribute('type', 'text')
    textInput.setAttribute('id', 'editValue')
    li.appendChild(textInput)


    //calling edit button
    myButton("Edit","edit","editText(this.value,this.id)",newText,getKey)

     //calling delete button
    myButton("Delete","delete","deleteText(this.value)",getKey,"deleteTxt")


    incompleteTasks.appendChild(li)




      newTask.value=""

       // button function
      function myButton(text, cls,action,val,id) {
        let editButton = document.createElement("button")
        let btnText = document.createTextNode(text)
        editButton.appendChild(btnText)

        editButton.setAttribute('class', cls)
        editButton.setAttribute('id', id)
        editButton.setAttribute("onclick",action)
        editButton.setAttribute("value",val)
        li.appendChild(editButton)
  }
    }



    // delete function
    function deleteText(para){
      console.log(para)
      firebase.database().ref(databaseName+para).remove()
    }

// edit function
    function editText(para,para2){
      console.log(para)
      console.log(para2)
      key=para2
      newTask.value=para

    }

