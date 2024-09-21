const feedbackContainer = document.getElementById("feedback-container");
const guestbookForm = document.getElementById("guestbook-form");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(guestbookForm);
  const formObject = Object.fromEntries(formData);
  console.log(formObject);
  fetch("http://localhost:8080/add-new-feedback"),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formObject }),
    };
}
guestbookForm.addEventListener("submit", handleSubmit);

//The event handler
//Prevent the defualt behaviour
//a FormData object template
//Get the formValues to insert them into the FormData object

//Fetch the CREATE endpoint to send the formValues to the server

//!When you finsih your assignment, make sure you replace the local host url with your deployed url
//!https://week4assignment.onrender.com

// fetch("localhost-url/endpoint"),
// {
//   method:
//   headers:
//   body:
// }

//The event listener --> submit

//FEEDBACK CONTAINER

//Fetch the READ endpoint to have access to the data
//!Get Foxes - Get Upgrades
//Fetch the URL
//Pare the response into JSON
//Wrangle data, if necessary

async function getFeedback() {
  const response = await fetch("http://localhost:8080/feedback");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
  return json;
}

async function createFeedback() {
  const data = await getFeedback();
  data.forEach((feedback) => {
    const h1 = document.createElement("h1");
    h1.textContent = feedback.name;
    feedbackContainer.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.textContent = feedback.date_visited;
    feedbackContainer.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = feedback.device_used;
    feedbackContainer.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = feedback.comments;
    feedbackContainer.appendChild(p);
  });
}

createFeedback();
