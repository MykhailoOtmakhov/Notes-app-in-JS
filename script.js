// import moment from 'moment'// // // // console.log('123');
// // const uuid = require('uuid');
// const { v4: uuidv4 } = require('uuid');
// // // // // function stringChecker(S, P1, P2) {
// // // // //   let i = 0;
// // // // //   let j = 0;

// <script src="https://jspm.dev/uuid" type="module">
// import { uuidv4 } from './node_modules/uuid/dist/v4';
// </script>
// import { v4 as uuidv4 } from "uuid";
// const { v4: uuidv4 } = require('uuid');

// const { v4: uuidv4 } = require('uuid');

// console.log(uuidv4());

// import { v4 as uuidv4 } from 'uuid';
// const {uuid} = require('uuid');

// // // // //   for (const char of S) {
// // // // //     // Перевіряємо, чи символ char може бути взятий з P1
// // // // //     if (i < P1.length && char === P1[i]) {
// // // // //       i++;
// // // // //     // Перевіряємо, чи символ char може бути взятий з P2
// // // // //     } else if (j < P2.length && char === P2[j]) {
// // // // //       j++;
// // // // //     // Якщо символ не може бути знайдений ні в P1, ні в P2, то не можна сформувати рядок S
// // // // //     } else {
// // // // //       return false;
// // // // //     }
// // // // //   }

// // // // //   // Перевіряємо, чи всі символи з P1 і P2 були використані для формування рядка S
// // // // //   return i === P1.length && j === P2.length;
// // // // // }

// // // // // const S = "hello";
// // // // // const P1 = "hlo";
// // // // // const P2 = "el";
// // // // // const result = stringChecker(S, P1, P2);
// // // // // console.log(result);

// // // // function canFormString(S, P1, P2) {

// // // // 	let sIndex = 0;
// // // // 	let p1Index = 0;
// // // // 	let p2Index = 0;
// // // // 	memo = {};

// // // //   if (sIndex === S.length) {
// // // //     return p1Index === P1.length && p2Index === P2.length;
// // // //   }

// // // //   const key = sIndex-p1Index-p2Index;
// // // //   if (key in memo) {
// // // //     return memo[key];
// // // //   }

// // // //   const char = S[sIndex];
// // // //   let result = false;

// // // //   if (p1Index < P1.length && char === P1[p1Index]) {
// // // //     result = result || canFormString(S, P1, P2
// // // // 			// , sIndex + 1, p1Index + 1, p2Index, memo
// // // // 			);
// // // //   }

// // // //   if (p2Index < P2.length && char === P2[p2Index]) {
// // // //     result = result || canFormString(S, P1, P2
// // // // 			// , sIndex + 1, p1Index, p2Index + 1, memo
// // // // 			);
// // // //   }

// // // //   memo[key] = result;
// // // //   return result;
// // // // }

// // // // // Приклад використання
// // // // const S = "w27y7";
// // // // const P1 = "27";
// // // // const P2 = "w7y";
// // // // const result = canFormString(S, P1, P2);
// // // // console.log(result); // Виведе true, оскільки можна сформувати "w27y7" з "27" і "w7y"


// // // // function canFormString(S, P1, P2, sIndex = 0, p1Index = 0, p2Index = 0, memo = {}) {
// // // //   if (sIndex === S.length) {
// // // //     return p1Index === P1.length && p2Index === P2.length;
// // // //   }

// // // //   const key = `${sIndex}-${p1Index}-${p2Index}`;
// // // //   if (key in memo) {
// // // //     return memo[key];
// // // //   }

// // // //   const char = S[sIndex];
// // // //   let result = false;

// // // //   if (p1Index < P1.length && char === P1[p1Index]) {
// // // //     result = result || canFormString(S, P1, P2, sIndex + 1, p1Index + 1, p2Index, memo);
// // // //   }

// // // //   if (p2Index < P2.length && char === P2[p2Index]) {
// // // //     result = result || canFormString(S, P1, P2, sIndex + 1, p1Index, p2Index + 1, memo);
// // // //   }

// // // //   memo[key] = result;
// // // //   return result;
// // // // }

// // // // // Приклад використання
// // // // const S = "w27y7";
// // // // const P1 = "27";
// // // // const P2 = "w7y";
// // // // const result = canFormString(S, P1, P2);
// // // // console.log(result); // Виведе true, оскільки можна сформувати "w27y7" з "27" і "w7y"

// // // function canFormString(S, P1, P2) {
// // //   let sIndex = 0;
// // //   let p1Index = 0;
// // //   let p2Index = 0;

// // //   while (sIndex < S.length) {
// // //     const char = S[sIndex];

// // //     if (p1Index < P1.length && char === P1[p1Index]) {
// // //       p1Index++;
// // //     } else if (p2Index < P2.length && char === P2[p2Index]) {
// // //       p2Index++;
// // //     } else {
// // //       return false;
// // //     }

// // //     sIndex++;
// // //   }

// // //   return p1Index === P1.length && p2Index === P2.length;
// // // }

// // // // Приклад використання
// // // const S = "w27y7";
// // // const P1 = "27";
// // // const P2 = "w7y";
// // // const result = canFormString(S, P1, P2);
// // // console.log(result); // Виведе true, оскільки можна сформувати "w27y7" з "27" і "w7y"

// // // function canFormString(S, P1, P2) {
// // //   function recursiveHelper(sIndex, p1Index, p2Index) {
// // //     if (sIndex === S.length) {
// // //       return p1Index === P1.length && p2Index === P2.length;
// // //     }

// // //     const char = S[sIndex];
// // //     let result = false;

// // //     if (p1Index < P1.length && char === P1[p1Index]) {
// // //       result = result || recursiveHelper(sIndex + 1, p1Index + 1, p2Index);
// // //     }

// // //     if (p2Index < P2.length && char === P2[p2Index]) {
// // //       result = result || recursiveHelper(sIndex + 1, p1Index, p2Index + 1);
// // //     }

// // //     return result;
// // //   }

// // //   return recursiveHelper(0, 0, 0);
// // // }

// // // const S = "w27y7";
// // // const P1 = "27";
// // // const P2 = "w7y";
// // // const result = canFormString(S, P1, P2);
// // // console.log(result);




// const creareNoteBtn = document.querySelector(".create-note-btn");
// const popupBox = document.querySelector(".popup-backdrop ");
// const addNoteBtn = document.querySelector(".add-note-btn");
// // // popupTitle = popupBox.querySelector("header p"),
// // // closeIcon = popupBox.querySelector("header i"),
// // // titleTag = popupBox.querySelector("input"),
// // // descTag = popupBox.querySelector("textarea"),
// // // addBtn = popupBox.querySelector("button");

// // // const months = ["January", "February", "March", "April", "May", "June", "July",
// // //               "August", "September", "October", "November", "December"];
// // // const notes = JSON.parse(localStorage.getItem("notes") || "[]");
// // // let isUpdate = false, updateId;

// creareNoteBtn.addEventListener("click", () => {
//     // popupTitle.innerText = "Add a new Note";
//     // addBtn.innerText = "Add Note";
//     popupBox.classList.add("show");
//     document.querySelector("body").style.overflow = "hidden";
//     // if(window.innerWidth > 660) titleTag.focus();
// });

// // // closeIcon.addEventListener("click", () => {
// // //     isUpdate = false;
// // //     titleTag.value = descTag.value = "";
// // //     popupBox.classList.remove("show");
// // //     document.querySelector("body").style.overflow = "auto";
// // // });

// // // function showNotes() {
// // //     if(!notes) return;
// // //     document.querySelectorAll(".note").forEach(li => li.remove());
// // //     notes.forEach((note, id) => {
// // //         let filterDesc = note.description.replaceAll("\n", '<br/>');
// // //         let liTag = `<li class="note">
// // //                         <div class="details">
// // //                             <p>${note.title}</p>
// // //                             <span>${filterDesc}</span>
// // //                         </div>
// // //                         <div class="bottom-content">
// // //                             <span>${note.date}</span>
// // //                             <div class="settings">
// // //                                 <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
// // //                                 <ul class="menu">
// // //                                     <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><i class="uil uil-pen"></i>Edit</li>
// // //                                     <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
// // //                                 </ul>
// // //                             </div>
// // //                         </div>
// // //                     </li>`;
// // //         addBox.insertAdjacentHTML("afterend", liTag);
// // //     });
// // // }
// // // showNotes();

// // // function showMenu(elem) {
// // //     elem.parentElement.classList.add("show");
// // //     document.addEventListener("click", e => {
// // //         if(e.target.tagName != "I" || e.target != elem) {
// // //             elem.parentElement.classList.remove("show");
// // //         }
// // //     });
// // // }

// // // function deleteNote(noteId) {
// // //     let confirmDel = confirm("Are you sure you want to delete this note?");
// // //     if(!confirmDel) return;
// // //     notes.splice(noteId, 1);
// // //     localStorage.setItem("notes", JSON.stringify(notes));
// // //     showNotes();
// // // }

// // // function updateNote(noteId, title, filterDesc) {
// // //     let description = filterDesc.replaceAll('<br/>', '\r\n');
// // //     updateId = noteId;
// // //     isUpdate = true;
// // //     addBox.click();
// // //     titleTag.value = title;
// // //     descTag.value = description;
// // //     popupTitle.innerText = "Update a Note";
// // //     addBtn.innerText = "Update Note";
// // // }

// // // addBtn.addEventListener("click", e => {
// // //     e.preventDefault();
// // //     let title = titleTag.value.trim(),
// // //     description = descTag.value.trim();

// // //     if(title || description) {
// // //         let currentDate = new Date(),
// // //         month = months[currentDate.getMonth()],
// // //         day = currentDate.getDate(),
// // //         year = currentDate.getFullYear();

// // //         let noteInfo = {title, description, date: `${month} ${day}, ${year}`}
// // //         if(!isUpdate) {
// // //             notes.push(noteInfo);
// // //         } else {
// // //             isUpdate = false;
// // //             notes[updateId] = noteInfo;
// // //         }
// // //         localStorage.setItem("notes", JSON.stringify(notes));
// // //         showNotes();
// // //         closeIcon.click();
// // //     }
// // // });


// // // Retrieve elements from the DOM
// // const addButton = document.getElementById('add-button');
// const nameInput = document.querySelector('note-name');
// const contentInput = document.querySelector('note-content');
// // const notesList = document.querySelector('.notes-list');

// // // Array to store notes
// // // let notesData = [];

// Function to add a new note
// function addNote() {
//   const name = nameInput.value.trim();
//   const content = contentInput.value.trim();

//   if (name === '' || content === '') {
//     alert('Please enter a title and content for the note.');
//     return;
//   }

//   const newNote = {
//     id: Date.now(),
//     name: name,
//     content: content
//   };

//   notesData.push(newNote);
//   updateNotesList();
//   clearInputs();
// }

// // // Function to update the notes list
// // function updateNotesList() {
// //   notesList.innerHTML = '';
// //   notesData.forEach((note) => {
// //     const listItem = document.createElement('li');
// //     listItem.innerHTML = `
// //     <b>${note.name}</b>: ${note.category}
// //     <tr>
// // 								<td>${note.name}</td>
// // 								<td>Created</td>
// // 								<td>${note.category}</td>
// // 								<td>Dates</td>
// //                 <td>Dates</td>
// // 								<td>Images</td>
// // 						</tr>
// //     `;
// //     notesList.appendChild(listItem);
// //   });
// // }

// // // Function to clear input fields
// // function clearInputs() {
// //   titleInput.value = '';
// //   contentInput.value = '';
// // }

// // // Event listener for the Add Note button
// // addButton.addEventListener('click', addNote);


// // let notesData = [
// //   { 								name : "Misha",

// //   // <td>Created</td>
// //   category: "Best",
// //   // <td>Content</td>?
// //   // <td>Dates</td>
// //   // <td>Images</td>

// // },
// // {name : "Misha",

// // // <td>Created</td>
// // category: "Best"}];

// // // const render(notesData)

// // Data variable to store notes
// let notesData = [
//   /* Sample data (prepopulated with 7 notes) */
//   // let notesData = [
//   { 								name : "Misha",

//   // <td>Created</td>
//   category: "Best",
//   // <td>Content</td>?
//   // <td>Dates</td>
//   // <td>Images</td>

// },
// {name : "Misha",

// // <td>Created</td>
// category: "Best"}];
// // ];

// // Function to render the notes table
// function renderNotesTable() {
//   // Retrieve the table body element
//   const tableBody = document.querySelector('.notes-table tbody');
//   // Clear the existing table content
//   tableBody.innerHTML = '';

//   // Loop through each note in the data and create a row in the table
//   notesData.forEach((note) => {
//     // Create a new row
//     const newRow = document.createElement('tr');

//     // Create and add cells for time of creation, note content, note category, dates mentioned, and actions
//     /* ... */

//     // Add the row to the table
//     tableBody.appendChild(newRow);
//   });
// }

// // Function to update the summary table
// function updateSummaryTable() {
//   // Retrieve the summary table body element
//   const summaryTableBody = document.querySelector('.summary-table tbody');
//   // Clear the existing table content
//   summaryTableBody.innerHTML = '';

//   // Group notes by category
//   const groupedByCategory = {};
//   notesData.forEach((note) => {
//     if (!groupedByCategory[note.category]) {
//       groupedByCategory[note.category] = [];
//     }
//     groupedByCategory[note.category].push(note);
//   });

//   // Loop through each category and create a row in the summary table
//   Object.keys(groupedByCategory).forEach((category) => {
//     const activeCount = groupedByCategory[category].filter((note) => !note.archived).length;
//     const archivedCount = groupedByCategory[category].filter((note) => note.archived).length;

//     // Create a new row
//     const newRow = document.createElement('tr');

//     // Create and add cells for category, active notes count, and archived notes count
//     /* ... */

//     // Add the row to the summary table
//     summaryTableBody.appendChild(newRow);
//   });
// }

// // Function to handle form submission for adding a new note
// function handleAddNoteFormSubmit(event) {
//   event.preventDefault();
//   // Get the form data and add the new note to the notesData variable
//   /* ... */

//   // Update the tables
//   renderNotesTable();
//   updateSummaryTable();
// }

// // Function to handle archiving a note
// function handleArchiveNoteClick(event) {
//   // Get the note ID from the clicked element (e.g., data attribute or element index)
//   // Set the 'archived' property of the note to true
//   // Update the tables
//   /* ... */
// }

// // Function to handle unarchiving a note
// function handleUnarchiveNoteClick(event) {
//   // Get the note ID from the clicked element (e.g., data attribute or element index)
//   // Set the 'archived' property of the note to false
//   // Update the tables
//   /* ... */
// }

// // Function to handle editing a note
// function handleEditNoteClick(event) {
//   // Get the note ID from the clicked element (e.g., data attribute or element index)
//   // Show a form with the note details to edit
//   // Update the note data when the form is submitted
//   // Update the tables
//   /* ... */
// }

// // Function to handle

// Retrieve elements from the DOM
// const addButton = document.getElementById('add-btn');
// const nameInput = document.getElementById('note-name');
// const contentInput = document.getElementById('note-content');
// const notesList = document.querySelector('.notes-list');

// // Array to store notes
// let notesData = [{ 								name : "Misha",

//   // <td>Created</td>
//   content: "Best",
//   // <td>Content</td>?
//   // <td>Dates</td>
//   // <td>Images</td>

// },
// {name : "Misha",

// // <td>Created</td>
// content: "Best"}];
// ];

// Function to add a new note
// function addNote() {
//   const name = nameInput.value.trim();
//   const content = contentInput.value.trim();

//   if (name === '' || content === '') {
//     alert('Please enter a name and content for the note.');
//     return;
//   }

//   const newNote = {
//     name: name,
//     // created: Date.now(),
//     // category: category,
//     content: content,
//   };

//   notesData.push(newNote);
//   updateNotesList();
//   clearInputs();
// }

// Function to update the notes list
// function updateNotesList(data) {
//   // notesList.innerHTML = notesData;
//   data.forEach((note) => {
//     const listItem = document.createElement('tr');
//     listItem.innerHTML = `
//     <td>${note.name}</td>
//     <td>${note.content}</td>
//     <td>${note.name}</td>
//     <td>${note.name}</td>
//     <td>${note.name}</td>
//     <td>${note.name}</td>
//     `
//     notesList.appendChild(listItem);
//   });
// }

// Function to clear input fields
function clearInputs() {
  nameInput.value = '';
  contentInput.value = '';
}

// Array to store notes
let notesData = [
  {
    name : "Shopping list",
    content: "Tomatoes, bread",
    category: "Task",
    created: "April 20, 2021",
    id: crypto.randomUUID(),
  // <td>Content</td>?
  // <td>Dates</td>
  // <td>Images</td>

},
{
  name : "The theory of evolution", 
  content: "The theory of evolution bla bla",
  category: "Random Thought",
  created: "April 27, 2021",
  id: crypto.randomUUID(),
// <td>Content</td>?
// <td>Dates</td>
// <td>Images</td>

},
{
  name : "Dantist's Visite", 
  content: "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
  category: "Random Thought",
  created: "May 05, 2021",
  id: crypto.randomUUID(),
  // dates: findDatesInString(content),
// <td>Content</td>?
// <td>Dates</td>
// <td>Images</td>

},
{
  name : "Dantist's Visite", 
  content: "I’m gonna have a vaction on the 3/6/2024, I moved it from 4/7/2024",
  category: "Idea",
  created: "May 05, 2023",
  id: crypto.randomUUID(),
  // dates: findDatesInString(content),
// <td>Content</td>?
// <td>Dates</td>
// <td>Images</td>

},
// {
//   name : "The theory of evolution", 
//   content: "The theory of evolution bla bla",
//   category: "Random Thought",
//   created: "April 27, 2021",
//   id: crypto.randomUUID(),
// // <td>Content</td>?
// // <td>Dates</td>
// // <td>Images</td>

// },
// {
//   name : "The theory of evolution", 
//   content: "The theory of evolution bla bla",
//   category: "Random Thought",
//   created: "April 27, 2021",
//   id: crypto.randomUUID(),
// // <td>Content</td>?
// // <td>Dates</td>
// // <td>Images</td>

// },
];

function findDatesInString(str) {
  const regex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/g;
  const matches = str.match(regex);
  return matches ? matches : [];
}

const creareNoteBtn = document.querySelector(".create-note-btn");
const editNoteBtn = document.querySelector(".edit-note-btn");
// const removeNoteBtn = document.querySelectorAll(".remove-note-btn");
const popupBox = document.querySelector(".popup-backdrop");
const addNoteBtn = document.querySelector(".add-note-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const nameInput = document.getElementById("note-name");
const categoryInput = document.getElementById("note-category");
const contentInput = document.getElementById("note-content");
const notesList = document.querySelector(".notes-list");
const archiveNotesList = document.querySelector(".archive-notes-list");
const summaryNotesList = document.querySelector(".summary-notes-list");


creareNoteBtn.addEventListener("click", () => {
  popupBox.classList.add("show");
  document.querySelector("body").style.overflow = "hidden";
});

// closeModalBtn.addEventListener("click", () => {
//   // updateNotesList();
//   clearInputs();
//   popupBox.classList.remove("show");
// });

addNoteBtn.addEventListener("click", () => {
  let name = nameInput.value.trim();
  let content = contentInput.value.trim();
  let category = categoryInput.value.trim();
  let id = crypto.randomUUID();

  if (name === '' || content === '') {
    alert('Please enter a name and content for the note.');
    return;
  }

  const newNote = {
      name: name,
      created: moment(new Date(Date.now())).format('MMMM D, YYYY'),
      content: content,
      category: category,
      id: id,
      isArchived: false,
    };
  
    notesData.push(newNote);
    updateNotesList();
    clearInputs();
    popupBox.classList.remove("show");
});

function updateNotesList() {
  notesList.innerHTML = '';
  notesData.filter((note) => note.isArchived !== true).forEach((note) =>  {
    // notesData = notesData.filter((note) => note.id !== noteId);
    const listItem = document.createElement('tr');
    listItem.innerHTML = `
    <td>${note.name}</td>
    <td>${note.created}</td>
    <td>${note.category}</td>
    <td>${note.content}</td>
    <td>${findDatesInString(note.content)}</td>
    <button class="edit-note-button" data-id="${note.id}"></button>
    <button class="remove-note-button" data-id="${note.id}"></button>
    <button class="archive-note-button" data-id="${note.id}"></button>
    `
    notesList.appendChild(listItem);
  });

  const editButtons = document.querySelectorAll('.edit-note-button');
  editButtons.forEach((button) => {
    button.addEventListener('click', handleEditNote);
  });

  const removeButtons = document.querySelectorAll('.remove-note-button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', handleRemoveNote);
  });

  const archiveButtons = document.querySelectorAll('.archive-note-button');
  archiveButtons.forEach((button) => {
    button.addEventListener('click', handleArchiveNote);
  });

  const unArchiveButtons = document.querySelectorAll('.unarchive-note-button');
  unArchiveButtons.forEach((button) => {
    button.addEventListener('click', handleArchiveNote);
  });
}

function updateArchiveNotesList() {
  archiveNotesList.innerHTML = '';
  notesData.filter((note) => note.isArchived == true).forEach((note) =>  {
    const listItem = document.createElement('tr');
    listItem.innerHTML = `
      <td>${note.name}</td>
      <td>${note.created}</td>
      <td>${note.category}</td>
      <td>${note.content}</td>
      <td>${findDatesInString(note.content)}</td>
      <button class="remove-note-button" data-id="${note.id}"></button>
      <button class="unarchive-note-button" data-id="${note.id}"></button>
    `
    archiveNotesList.appendChild(listItem);
    console.log('archiveNotesList', archiveNotesList);
    
  });

  const editButtons = document.querySelectorAll('.edit-note-button');
  editButtons.forEach((button) => {
    button.addEventListener('click', handleEditNote);
  });

  const removeButtons = document.querySelectorAll('.remove-note-button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', handleRemoveNote);
  });

}

function updateSummaryNotesList() {
  summaryNotesList.innerHTML = '';
  let activeTaskSum = [];
  let activeRandomThoughtSum = [];
  let activeIdeaSum = [];
  let archiveTaskSum = [];
  let archiveRandomThoughtSum = [];
  let archiveIdeaSum = [];

  notesData.forEach((note) => {
    if (note.isArchived == true) {
      switch (note.category){
        case "Task":
          archiveTaskSum.push(note);
          break;
        case "Random Thought":
          archiveRandomThoughtSum.push(note);
          break;
        case "Idea":
          archiveIdeaSum.push(note);
          break;
        default:
          console.log("Sorry!");
      }
    } if (note.isArchived != true) {
      switch (note.category){
        case "Task":
          activeTaskSum.push(note);
          console.log("activeTaskSumL", activeTaskSum);
          break;
        case "Random Thought":
          activeRandomThoughtSum.push(note);
          break;
        case "Idea":
          activeIdeaSum.push(note);
          break;
        default:
          console.log("Sorry!");
      }
    }
    // let archiveTaskSum = notesData.filter(note => note.category == 'Task' && note.isArchived == true).length;
    // let archiveTaskSumreduce = notesData.reduce((arcSum, note) => note.category == 'Task' && note.isArchived == true,0);

    // console.log(arcSum);
    

    // let activeTaskSum = notesData.filter(note => note.category == 'Task' && note.isArchived !== true).length;

    // let archiveRandomThoughtSum = notesData.filter(note => note.category == 'Random Thought' && note.isArchived == true).length;
    // let activeRandomThoughtSum = notesData.filter(note => note.category == 'Random Thought' && note.isArchived !== true).length;

    // let archiveIdeaSum = notesData.filter(note => note.category == 'Idea' && note.isArchived == true).length;
    // let activeIdeaSum = notesData.filter(note => note.category == 'Idea' && note.isArchived !== true).length;

    summaryNotesList.innerHTML = `
      <tr>
        <td>Task</td>
        <td>${activeTaskSum.length}</td>
        <td>${archiveTaskSum.length}</td>

      </tr>
      <tr>
        <td>Random Thoughts</td>
        <td>${activeRandomThoughtSum.length}</td>
        <td>${archiveRandomThoughtSum.length}</td>

      </tr>
      <tr>
        <td>Ideas</td>
        <td>${activeIdeaSum.length}</td>
        <td>${archiveIdeaSum.length}</td>

      </tr>

    `
  }
  );

  const editButtons = document.querySelectorAll('.edit-note-button');
  editButtons.forEach((button) => {
    button.addEventListener('click', handleEditNote);
  });

  const removeButtons = document.querySelectorAll('.remove-note-button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', handleRemoveNote);
  });

  // const unarchiveButtons = document.querySelectorAll('.unarchive-note-button');
  // unarchiveButtons.forEach((button) => {
  //   button.addEventListener('click', handleArchiveNote);
  // });
}

function handleEditNote(event) {
  const noteId = event.target.dataset.id;
  const note = notesData.find((note) => note.id === noteId);
  if (note) {
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    nameInput.value = note.name;
    contentInput.value = note.content;
    categoryInput.value = note.category;
    notesData = notesData.filter((note) => note.id !== noteId);
    updateArchiveNotesList();
  }
}

function handleArchiveNote(event) {
  const noteId = event.target.dataset.id;

  // let confirmDel = confirm("Are you sure you want to delete this note?");
  // if(!confirmDel) return;

  const note = notesData.find((note) => note.id === noteId);
  if (note) {
    note.isArchived = !note.isArchived;
    // console.log(note);
    // console.log('notesData', notesData);
    
    
    // nameInput.value = note.name;
    // contentInput.value = note.content;
    // categoryInput.value = note.category;
    // notesData = notesData.filter((note) => note.id !== noteId);
    updateArchiveNotesList();
    updateNotesList();
    updateSummaryNotesList();
  }
}


// unArchiveButtons

function handleRemoveNote(event) {
  const noteId = event.target.dataset.id;
  let confirmDel = confirm("Are you sure you want to delete this note?");
  if(!confirmDel) return;
  notesData = notesData.filter((note) => note.id !== noteId);

  updateNotesList();
  updateArchiveNotesList();
  updateSummaryNotesList();
}

updateNotesList(notesData);
updateArchiveNotesList(notesData);
updateSummaryNotesList(notesData);