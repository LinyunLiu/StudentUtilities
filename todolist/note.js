const addBox = document.querySelector(".add-box"),
  popupBox = document.querySelector(".popup-box"),
  popupTitle = popupBox.querySelector("header p"),
  closeIcon = document.querySelector("header i"),
  titleEl = document.querySelector("input"),
  descEl = document.querySelector("textarea"),
  addBtn = document.querySelector("button ");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false,
  updateId;

function showNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove());
  notes.forEach((note, index) => {
    let liEl = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${note.description}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                                <i onClick="updateNote(${index}, '${note.title}', '${note.description}')"  class="uil uil-edit"></i>
                                <i onClick="deleteNote(${index})" class="uil uil-trash"></i>
                            </div>
                        </div>
                    </li>`;
    addBox.insertAdjacentHTML("afterend", liEl);
  });
}

showNotes();

function deleteNote(noteId, note) {
  let confirmDelete = confirm("Delete?");
  if (!confirmDelete) return;
  notes.splice(noteId, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function updateNote(noteId, title, desc) {
  isUpdate = true;
  updateId = noteId;
  addBox.click();
  titleEl.value = title;
  descEl.value = desc;
  addBtn.innerText = "Edit";
  popupTitle.innerText = "Edit";
}

addBox.addEventListener("click", () => {
  titleEl.focus();
  popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  isUpdate = false;
  titleEl.value = "";
  descEl.value = "";
  addBtn.innerText = "Add";
  popupTitle.innerText = "Add";
  popupBox.classList.remove("show");
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let noteTitle = titleEl.value,
    noteDesc = descEl.value;
  if (noteTitle || noteDesc) {
    let dateEl = new Date(),
      month = months[dateEl.getMonth()],
      day = dateEl.getDate(),
      year = dateEl.getFullYear();

    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${month} ${day} ${year}`,
    };

    if (!isUpdate) {
      notes.push(noteInfo);
    } else {
      isUpdate = false;
      notes[updateId] = noteInfo;
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    closeIcon.click();
    showNotes();
  }
});
