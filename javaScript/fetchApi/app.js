const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector("select[name='from']");
const toCurr = document.querySelector("select[name='to']");
const msg = document.querySelector(".msg");

/* Populate dropdowns */
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.innerText = currCode;
    option.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      option.selected = true;
    }
    if (select.name === "to" && currCode === "INR") {
      option.selected = true;
    }

    select.append(option);
  }

  select.addEventListener("change", (e) => updateFlag(e.target));
}

/* Update flag */
function updateFlag(element) {
  let countryCode = countryList[element.value];
  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

/* Button click */
btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let amount = document.querySelector(".amount input");
  let amtVal = amount.value || 1;

  const URL = `https://api.frankfurter.app/latest?amount=${amtVal}&from=${fromCurr.value}&to=${toCurr.value}`;

  try {
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data.rates[toCurr.value];
    msg.innerText = `${amtVal} ${fromCurr.value} = ${rate} ${toCurr.value}`;
  } catch (err) {
    msg.innerText = "Error fetching exchange rate";
  }
});
