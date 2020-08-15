
// console.log(firebase.database)

let newTask=document.getElementById("new-task")

// let incompleteTasks=document.getElementById("incomplete-tasks")

function addToDatabase(){
  let key=Math.random()*34234234
  const task={
    text: newTask.value

  }
firebase.database().ref('ToDo').push(task)
newTask.value=""
}

// function addTask(){
//     let li = document.createElement("li")

//     //create label
//     let lbl = document.createElement("label")
//     let lblText = document.createTextNode(newTask.value)

//     lbl.appendChild(lblText)
//     li.appendChild(lbl)

//     //create text input
//     let textInput = document.createElement("input")
//     textInput.setAttribute('type', 'text')
//     li.appendChild(textInput)

//     myButton("Edit","edit")
//     myButton("Delete","delete")


//     incompleteTasks.appendChild(li)
//     console.log(incompleteTasks)




//       newTask.value=""
//       function myButton(text, cls) {
//         let editButton = document.createElement("button")
//         let btnText = document.createTextNode(text)
//         editButton.appendChild(btnText)

//         editButton.setAttribute('class', cls)
//         // editButton.setAttribute('onclick', action)
//         li.appendChild(editButton)
//   }
//     }
