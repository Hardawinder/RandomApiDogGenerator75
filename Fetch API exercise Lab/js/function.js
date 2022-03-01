const urlForDog = `https://dog.ceo/api/breeds/image/random`;


function getRandomDogPhoto(input) {
  return fetch(input)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

async function init() {
  loadSpinner();
  const data = await getRandomDogPhoto(urlForDog);
  console.log(data);
  removeSpinner();
  renderDogPhoto(data.message);
}

function renderDogPhoto(data2) {
  var htmlvalue = `
    <h1>The Fetch API Exercises</h1>
      <p>Open the web inspector console to test.</p>
 <img src="${data2}" alt="Random photo of a dog"/>
 `;

  $("#container").html(htmlvalue);
}

function loadSpinner() {
  const spinner = `../assets/loader.svg`;
  const img = `<img src="${spinner}" id="spinner" alt="Loading spinner image" />`;
  document.querySelector(`#container`).insertAdjacentHTML(`beforeend`, img);

  $("#load").attr('disabled',true)
}
function removeSpinner() {
  const spinner = document.querySelector(`img#spinner`);
  spinner.parentElement.removeChild(spinner);

  $("#load").attr('disabled',false)
}

$("#load").click(function () {
  init();
});
