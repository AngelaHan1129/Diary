var date = new Date();
var yyyy = date.getFullYear();
var mm = String(date.getMonth() + 1).padStart(2, "0");
var dd = String(date.getDate()).padStart(2, "0");
var today = yyyy + "-" + mm + "-" + dd;

document.getElementById("date").value = today;

// function selectOption(option) {
//   var selectedText = option.querySelector("img").getAttribute("alt");
//   var dropOption = option.closest(".drop").querySelector(".dropOption a");
//   dropOption.textContent = selectedText;
//   dropOption.removeAttribute("id");
//   option.closest(".drop").querySelector(".dropdown").style.display = "none";
// }
function selectOption(option) {
  var selectedText = option.options[option.selectedIndex].text;
  var selectedValue = option.value;
  var dropOption = option.closest(".drop").querySelector(".dropOption a");
  dropOption.textContent = selectedText;
  dropOption.removeAttribute("id");
  option.closest(".drop").querySelector(".dropdown").style.display = "none";
  
  // 更新圖示
  var imageUrl = option.options[option.selectedIndex].getAttribute("data-image");
  var imageContainer = option.closest(".drop").querySelector(".image-container");
  var imgElement = imageContainer.querySelector("img");
  if (!imgElement) {
      imgElement = document.createElement("img");
      imageContainer.appendChild(imgElement);
  }
  imgElement.src = imageUrl;
  imgElement.alt = selectedValue;
}

function toggleDropdown(option) {
  var dropdown = option.nextElementSibling;
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

function loadImage(option, emotion) {
  document.getElementById("image-container").innerHTML = "";
  const imageUrl = option.getAttribute("data-image");
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.status === 200) {
      const blob = this.response;
      const imageUrl = URL.createObjectURL(blob);
      const imgElement = document.createElement("img");

      imgElement.width = 80;
      imgElement.height = 80;
      imgElement.src = imageUrl;
      document.getElementById("image-container").appendChild(imgElement);
    } else {
      console.error("Request failed with status:", this.status);
    }
  };
  xhttp.responseType = "blob";
  xhttp.open("GET", imageUrl);
  xhttp.send();

  // document.getElementById("selected_emotion_field").value = emotion;
}

// function loadImage1(option, emotion) {
//   document.getElementById("image-container1").innerHTML = "";
//   const imageUrl = option.getAttribute("data-image");
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function () {
//     if (this.status === 200) {
//       const blob = this.response;
//       const imageUrl = URL.createObjectURL(blob);
//       const imgElement = document.createElement("img");

//       imgElement.width = 80;
//       imgElement.height = 80;
//       imgElement.src = imageUrl;
//       document.getElementById("image-container1").appendChild(imgElement);
//     } else {
//       console.error("Request failed with status:", this.status);
//     }
//   };
//   xhttp.responseType = "blob";
//   xhttp.open("GET", imageUrl);
//   xhttp.send();

//   // document.getElementById("selected_weather_field").value = emotion;
// }

//document.getElementById("current_date_input") = yyyy + "-" +  mm + "-" + dd;

var music = document.getElementsByClassName("music");
var submit = document.querySelector("button");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  // music.style.transition = "transform 0.4s"
  // music.style.transform = "none"
});

async function DiaryData() {
  const formDiary = await document.querySelector(".formDiary");
  let dateValue = document.querySelector(".datecontent").value;
  console.log(dateValue)
  let emojiValue = document.querySelector(".emojivalue");
  var getData = localStorage.getItem("userData");
  var getDataArr = JSON.parse(getData);
  console.log(getDataArr);
  console.log(emojiValue);
  let msg = "";
  try {
    formDiary.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(formDiary);
      let object = {
        account: getDataArr.user,
        emoji: emojiValue,
        content: "你好哇哇哇",
        title: "你好哇哇哇",
        date: dateValue,
      };
      formData.forEach((value, key) => (object[key] = value));
      let json = JSON.stringify(object);
      fetch("http://localhost:8000/api/write_diary", {
        method: "POST",
        body: json,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          errmsg = msg.replace("", data.msg);
          document.getElementById("diarymsg").innerText = errmsg;
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    });
  } catch (err) {
    console.log(err);
  }
}
DiaryData();
