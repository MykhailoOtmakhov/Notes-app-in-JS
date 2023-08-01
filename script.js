import { findDatesInString } from"./myFunc.js";

let notesData = [
  {
    name : "Shopping list",
    content: "Tomatoes, bread",
    category: "Task",
    created: "April 20, 2021",
    id: crypto.randomUUID(),
  },
  {
    name : "The theory of evolution", 
    content: "The theory of evolution bla bla",
    category: "Random Thought",
    created: "April 27, 2021",
    id: crypto.randomUUID(),
  },
  {
    name : "Dantist's Visite", 
    content: "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    category: "Random Thought",
    created: "May 05, 2021",
    id: crypto.randomUUID(),
  },
  {
    name : "Father's Visite", 
    content: "I’m gonna have a vaction on the 3/6/2024, I moved it from 4/7/2024",
    category: "Idea",
    created: "May 05, 2023",
    id: crypto.randomUUID(),
  },
  {
    name : "Todo list",
    content: "Exams 2/5/2023, vacation 2/8/2023",
    category: "Task",
    created: "May 20, 2022",
    id: crypto.randomUUID(),
  },
  {
    name : "The theory of evolution", 
    content: "The theory of evolution bla bla",
    category: "Random Thought",
    created: "April 27, 2021",
    id: crypto.randomUUID(),
    isArchived: true,
  },
  {
    name : "Build a camp", 
    content: "Build a camp on Burning Man",
    category: "Idea",
    created: "August 05, 2021",
    id: crypto.randomUUID(),
  }
];

const creareNoteBtn = document.querySelector(".create-note-btn");
const popupBox = document.querySelector(".popup-backdrop");
const addNoteBtn = document.querySelector(".add-note-btn");

const notesList = document.querySelector(".notes-list");
const archiveNotesList = document.querySelector(".archive-notes-list");
const summaryNotesList = document.querySelector(".summary-notes-list");

const nameInput = document.getElementById("note-name");
const categoryInput = document.getElementById("note-category");
const contentInput = document.getElementById("note-content");


function clearInputs() {
  nameInput.value = '';
  contentInput.value = '';
}

function handleCreateNoteButton() {
  popupBox.classList.add("show");
  document.querySelector("body").style.overflow = "hidden";
}

function handleAddNoteButton(){
  let name = nameInput.value.trim();
  let content = contentInput.value.trim();
  let category = categoryInput.value.trim();
  let id = crypto.randomUUID();

  if (name === '' || content === '') {
    alert('Please enter a name and content for the note!');
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
};

function handleEditNote(event) {
  const noteId = event.target.dataset.id;
  const note = notesData.find((note) => note.id === noteId);
  if (note) {
    handleCreateNoteButton();
    nameInput.value = note.name;
    contentInput.value = note.content;
    categoryInput.value = note.category;
    notesData = notesData.filter((note) => note.id !== noteId);
  }
}

function handleArchiveNote(event) {
  const noteId = event.target.dataset.id;
  const note = notesData.find((note) => note.id === noteId);
  if (note) {
    note.isArchived = !note.isArchived;
    updateArchiveNotesList();
    updateNotesList();
    updateSummaryNotesList();
  }
}

function handleRemoveNote(event) {
  const noteId = event.target.dataset.id;
  let confirmDel = confirm("Are you sure you want to delete this note?");
  if(!confirmDel) return;
  notesData = notesData.filter((note) => note.id !== noteId);
  updateNotesList();
  updateArchiveNotesList();
  updateSummaryNotesList();
}

function updateNotesList() {
  notesList.innerHTML = '';
  notesData.filter((note) => note.isArchived !== true).forEach((note) =>  {
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
  });

  const removeButtons = document.querySelectorAll('.remove-note-button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', handleRemoveNote);
  });

  const unArchiveButtons = document.querySelectorAll('.unarchive-note-button');
  unArchiveButtons.forEach((button) => {
    button.addEventListener('click', handleArchiveNote);
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
          console.log("Enter existing category, please!");
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
          console.log("Enter existing category, please!");
      }
    }

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
  });
}

creareNoteBtn.addEventListener("click", handleCreateNoteButton);
addNoteBtn.addEventListener("click", handleAddNoteButton);

updateNotesList();
updateArchiveNotesList();
updateSummaryNotesList();