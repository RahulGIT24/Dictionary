const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "25ab4d31b9msheee4e9bad0d4df4p1ecaf6jsn74db06801763",
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
  },
};

function getDefinition(word) {
  loader.style.display = "flex";
  document.getElementById("newDict").style.display = "none";
  fetch(
    `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      warning.style.display = "none";
      loader.style.display = "none";
      var str = "";
      for (let i = 0; i < response.list.length; i++) {
        str += `<li>${i + 1}. <i>${response.list[i].definition}</i></li>`;
      }
      document.getElementById("word").innerText = word;
      if (document.getElementById("definitions").innerHTML == "") {
        document.getElementById(
          "definitions"
        ).innerHTML = `<h1 class="text-center">Not found</h1>`;
        console.log("Working ON..");
      } else {
        document.getElementById("definitions").innerHTML = str;
      }
      document.getElementById("newDict").style.display = "block";
    })
    .catch((err) => {
      loader.style.display = "none";
      warning.style.display = "block";
      console.error(err);
    });
}

btn.addEventListener("click", () => {
  let word = document.getElementById("input").value;
  if (word != "") {
    console.log("Working");
    getDefinition(word);
  } else {
    console.log("input Error");
    alert("Please enter a word");
  }
});
