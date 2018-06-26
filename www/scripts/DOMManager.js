function changeH1(event, value) {
  var e = window.event || event;
  var target = e.target || e.srcElement;
  if (value) {
    document.getElementById("titulo").textContent = target.textContent;
  }
}

function wipeSection() {
  var section = document.getElementById("section2");

  while (section.childElementCount > 1) {
    section.removeChild(section.lastChild);
  }
}

function createForms(formType) {
  var form = document.createElement("form");
  var isEdit = true;
  form.method = "POST";

  Object.keys(formType).forEach(header => {
    if (formType[header] === undefined) {
      formType[header] = null;
      isEdit = false;
    }

    var div = document.createElement("div");

    var label = document.createElement("label");
    label.textContent = header.charAt(0).toUpperCase() + header.slice(1) + ":";
    label.htmlFor = header;

    div.appendChild(label);

    var input = document.createElement("input");
    input.name = header;

    if (header.toLowerCase() == "birthdate") {
      input.id = "datePicker";
      $(document).ready(function() {
        $('#datePicker').datepicker({     
         dateFormat: 'dd-mm-yy',
         firstDay: 1,
         duration: "fast",
         showAnim: "drop", 
         closeText: "Close",
         currentText: "Current Date", 
         showOptions: {direction: "up"} ,
        });
    });
    } else if (header.toLowerCase() == "country") {
      input = document.createElement("select");
      populateCountries(input);
      input.value = formType[header];
    } else if (header.toLowerCase() == "gender") {
      let divRadio = document.createElement("div");
      divRadio.id = "radioButtons";
      input = createRadioButtons(divRadio, formType[header]);
    } else {
      input.type = "text";
      input.value = formType[header];
    }

    div.appendChild(input);
    form.appendChild(div);
  });

  var divButtons = document.createElement("div");

  var backButton = document.createElement("button");
  backButton.name = "backButton";
  backButton.id = "backButton";
  backButton.textContent = "Back";



  if (formType.constructor.name === "Player") {
    backButton.addEventListener("click", function() {
      players(event);
    });
  } else {
    backButton.addEventListener("click", function() {
      gameSessions(event);
    });
  }

  var createbutton = document.createElement("input");
  createbutton.type = "submit";
  if (isEdit) {
    createbutton.value = "Save";
  } else {
    createbutton.value = "Create";
  }

  divButtons.appendChild(backButton);
  divButtons.appendChild(createbutton);
  divButtons.id = "formButtons";

  //form.appendChild(divButtons);

  document.getElementById("section2").appendChild(form);
  document.getElementById("section2").appendChild(divButtons);
}

function createTables(objectList) {
  console.log(objectList.length);
  var table = document.createElement("table");
  activeTable = objectList[0].constructor.name;
  table.id = activeTable;
  var tHeader = document.createElement("thead");
  var tBody = document.createElement("tbody");


  tHeader = createTableHeader(objectList[0]);
  tBody = populateTable(objectList);

  table.appendChild(tHeader);
  table.appendChild(tBody);

  document.getElementById("section2").appendChild(table);
}

function createTableHeader(object){
  var tHeader = document.createElement("thead");
  var thRow = document.createElement("tr");
  for (let prop in object) {
    var head = document.createElement("th");
    if (object[prop] instanceof Date && object["constructor"].name === "Player") {
      head.textContent = "Age";
    } else{
      head.textContent = prop.charAt(0).toUpperCase() + prop.slice(1, prop.length);
    }

    if({}.toString.call(object[prop]) !== '[object Function]'){
      thRow.appendChild(head);
    }
    
  }
  tHeader.appendChild(thRow);

  return tHeader;
}

function populateTable(objectList){
  var tBody = document.createElement("tbody");
  objectList.forEach(object => {
    var tdRow = document.createElement("tr");
    tdRow.onclick = selectTR;

    if(object["constructor"].name == "StatisticsPlayer"){
      playersInserted.push(object.player);
    }

    Object.keys(object).forEach(data => {
      var tData = document.createElement("td");
      if (object[data] instanceof Date) {
        if(object["constructor"].name == "Player"){
          tData.textContent = getAge(object[data]);
        }else{
          console.log("DATE:" +object[data]);
          tData.textContent = formatDate(object[data]);
        } 

      } else {
        tData.textContent = object[data];
      }
      
      tdRow.appendChild(tData);
    });
    tBody.appendChild(tdRow);
  });

  return tBody;
}

function createButtonsBar() {
  var operatorsDiv = document.createElement("div");
  operatorsDiv.id = "operators";
  var buttonsDiv = document.createElement("div");
  buttonsDiv.id = "buttons";
  var checkBoxDiv = document.createElement("div");
  checkBoxDiv.id = "checkbox";

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "checkBoxLista";
  checkBox.name = "checkBoxLista";
  checkBox.onchange = selectAll;
  var checkBoxLabel = document.createElement("label");
  checkBoxLabel.textContent = "Select all";
  checkBoxLabel.htmlFor = "checkBoxLista";

  checkBoxDiv.appendChild(checkBox);
  checkBoxDiv.appendChild(checkBoxLabel);

  var createButton = document.createElement("button");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  createButton.id = "createButton";
  createButton.name = "createButton";
  createButton.textContent = "Create";
  buttonsDiv.appendChild(createButton);

  editButton.id = "editButton";
  editButton.name = "editButton";
  editButton.textContent = "Edit";
  buttonsDiv.appendChild(editButton);

  deleteButton.id = "deleteButton";
  deleteButton.name = "deleteButton";
  deleteButton.textContent = "Delete";
  buttonsDiv.appendChild(deleteButton);

  operatorsDiv.appendChild(checkBoxDiv);
  operatorsDiv.appendChild(buttonsDiv);
  document.getElementById("section2").appendChild(operatorsDiv);
}

function activateButtons(formType) {
  let createButton = (document.getElementById("createButton").onclick = () => {
    wipeSection();
    if(formType == "Player"){
      createForms(new Player());
    }else if(formType == "GameSession"){
      createForms(new GameSession());
    }else{
      createForms(new Statistic());
    }
    
  });

  let deleteButton = (document.getElementById("deleteButton").onclick = () =>{
    deleteTableRows();
  });

  let editButton = (document.getElementById("editButton").onclick = () => {
    wipeSection();
    editInformation();
    addInput();
  });
}

function selectTR(event) {
  var table = document.getElementById("table");
  let index = $(this).index();
  /*var e = window.event || event;
  var target = e.target || e.srcElement;
  var tableRow = target.parentElement;
  */

  //console.log(tableRow.sectionRowIndex);
  $(this).toggleClass("selected");
  handleSelection(index);
  //handleSelection(tableRow.sectionRowIndex);
  //tableRow.classList.toggle("selected");

  if ($(this).prop("className") == "") {
    $("#checkBoxLista").prop("checked", false);
  }
  /*if (table.rows[0] !== tableRow) {
    if (tableRow.classList.contains("selected")) {
      tableRow.classList.remove("selected");
    } else {
      tableRow.classList.toggle("selected");
    }
  }*/
}

/*function selectAll() {
  let tableBody = document.getElementById("table").lastChild;
  
  let checkbox = document.getElementById("checkBoxLista");
  let indexes = [];

  tableBody.childNodes.forEach(elem => {
    if (checkbox.checked) {
      if (elem.className === "selected") {
        elem.classList.toggle("selected");
        elem.classList.toggle("selected");
      } else {
        elem.classList.toggle("selected");
      }
      indexes.push(elem.sectionRowIndex);
    } else {
      if (elem.className === "selected") {
        elem.classList.toggle("selected");
      }
    }
  });

  handleSelection(indexes);
}*/

function selectAll() {
  let checkBoxValue = $("#checkBoxLista").prop("checked");
  let indexes = [];
  $("tr").each(function() {
    let index = $(this).index();
    if (checkBoxValue) {
      if ($(this).prop("class") != "selected") {
        $(this).toggleClass("selected");
        indexes.push(index);
      }
    } else {
      if ($(this).prop("class") == "selected") {
        $(this).toggleClass("selected");
        indexes.pop();
      }
    }
  });

  handleSelection(indexes);
}

function handleCheckBox() {
  let value = false;
  $("tr").each(function() {
    if ($(this).prop("class") != "selected") {
      value = false;
      return;
    } else {
      value = true;
    }
  });

  $("checkBoxLista").prop("checked", value);
}

function handleSelection(value) {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      indexSelected = [];
    } else {
      value.forEach(elem => {
        indexSelected.push(elem);
      });
      indexSelected = Array.from(new Set(indexSelected));
    }
  } else {
    if (indexSelected.includes(value)) {
      let index = indexSelected.indexOf(value);
      indexSelected.splice(index, 1);
    } else {
      indexSelected.push(value);
    }
  }

  indexSelected.sort(function(a, b) {
    return a - b;
  });

  /*indexSelected.forEach(elem => {
    console.log(elem);
  });*/
}

function deleteTableRows(count) {
  if (indexSelected.length === 0) {
    return;
  }

  let checkBox = document.getElementById("checkBoxLista");

  count = count || 0; 

  let index = indexSelected[0] - count;

  let tableBody = $('tbody > tr');

  console.log(index + "encontrado"); 
  tableBody.eq(index).remove();
  indexSelected.shift(); 

  count++;

  if (checkBox.checked === true) {
    checkBox.checked = false;
  }

  deleteTableRows(count);
}

function editInformation() {
  if (indexSelected.length === 1) {
    switch (activeTable) {
      case "Player":
        createForms(playersList[indexSelected[0]]);
        break;
      case "GameSession":
        createForms(sessonsList[indexSelected[0]]);
        break;
    }
  }
}

function handleCreateAndSave() {}

function toggleCross(element) {
  var section1 = document.getElementById("section1");
  element.classList.toggle("open");

  if (section1.classList.contains("show")) {
    section1.classList.remove("show");
    section1.classList.toggle("hide");
  } else {
    section1.classList.remove("hide");
    section1.classList.toggle("show");
  }
}

function populateCountries(input) {
  let sortedCountries = countries.sort();

  sortedCountries.forEach(elem => {
    let option = document.createElement("option");
    option.value = elem;
    option.textContent = elem;
    input.appendChild(option);
  });

  return input;
}

function createRadioButtons(divRadio, value) {
  let input = document.createElement("input");
  let input2 = document.createElement("input");
  let label = document.createElement("label");
  let label2 = document.createElement("label");
  let divOption = document.createElement("div");
  let divOption2 = document.createElement("div");

  label.htmlFor = "Male";
  label.textContent = "Male";
  label.id = "male";

  label2.htmlFor = "Female";
  label2.textContent = "Female";
  label2.id = "female";

  input.type = "radio";
  input.value = "Male";
  input.id = "Male";
  input.name = "Gender";


  input2.type = "radio";
  input2.value = "Female";
  input2.id = "Female";
  input2.name = "Gender";

  if(value == "Female"){
    input2.checked = true;
  }

  if(value == "Male"){
    input.checked = true;
  }


  divOption.appendChild(input);//label.appendChild(input);
  divOption.appendChild(label);
  
  divOption.className = "radio";
 
  divOption2.appendChild(input2);//label2.appendChild(input2);
  divOption2.appendChild(label2);
  
  divOption2.className = "radio";
  

  //divRadio.appendChild(label);
  //divRadio.appendChild(label2);
  divRadio.appendChild(divOption);
  divRadio.appendChild(divOption2);

  return divRadio;
}


function addInput() {
  $("form").each(function() {
    console.log($(this).find(":input"));
  });
}

function players(event, value) {
  wipeSection();
  changeH1(event, value);
  createTables(playersList);
  createButtonsBar();
  if(value){
    toggleCross(document.getElementById("nav-icon"));
  }
  activateButtons("Player");
}

function gameSessions(event, value) {
  wipeSection();
  changeH1(event, value);
  createTables(sessonsList);
  if(value){
    toggleCross(document.getElementById("nav-icon"));
  }
  createButtonsBar();
  activateButtons("GameSession");
}

function statistics(event, value) {
  wipeSection();
  changeH1(event, value);
  toggleCross(document.getElementById("nav-icon"));
  //createTables(statisticsList);
  StatisticsPage();
}
