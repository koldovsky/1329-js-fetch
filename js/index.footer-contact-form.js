const form = document.getElementById("contact-form");
const result = document.getElementById("contact-form-result");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });
  if (response.status === 200) {
    result.innerHTML = "Form submitted successfully";
  } else {
    result.innerHTML = "Error";
  }
  form.reset();
  setTimeout(() => (result.style.display = "none"), 3000);
});


