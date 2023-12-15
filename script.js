const COHORT = "2311-fsa-et-web-ft-sf!";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

//id = addForms 
//id = Events 

const events = {
  events: [],
};

const eventsList = document.querySelector("#Events");

const Form = document.querySelector("#addForm");
Form.addEventListener("submit", addForm);

/**
 * Sync API and rerender
 */
async function render() {
  await getEvent();
  renderEvent();
}
render();

/**
 * Update location with event from API
 */
async function getevent() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    location.event = json.data;
  } catch (error) {
    console.error(error);
  }
}
// TODO

/**
 * Render party from location 
 */
function renderparty() {
  if (!party.location.length) {
    partyList.innerHTML = "<li>No party.</li>";
    return;
  }

  const partyCards = location.party.map((artist) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h2>${party.name}</h2>
        <img src="${party.imageUrl}" alt="${party.name}" />
        <p>${party.description}</p>
      `;
    return li;
  });

  eventsList.replaceChildren(...partyCards);
}
// TODO

/**
 * Ask the API to create a new artist based on form data
 * @param {Event} event
 */
async function addform(event) {
  event.preventDefault();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: addForm.name.value,
        imageUrl: addForm.imageUrl.value,
        description: addForm.description.value,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create artist");
    }

    render();
  } catch (error) {
    console.error(error);
  }
}

//Tried to input delete button 

const deleteEvent=async(e)=>{

}

//function delet(e){console.log(e.target.id)
render(); SubmitEvent.addEventListener("cllick", add)