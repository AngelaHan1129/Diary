var date = new Date();
var yyyy = date.getFullYear();
var mm = String(date.getMonth() + 1).padStart(2, '0');
var dd = String(date.getDate()).padStart(2, '0');
var today = yyyy + "-" + mm + "-" + dd;

document.getElementById("date").value = today;

// 下拉式選單控制
function selectOption(option) {
    var selectedText = option.querySelector('img').getAttribute('alt');
    var dropOption = option.closest('.drop').querySelector('.dropOption a');
    dropOption.textContent = selectedText;
    dropOption.removeAttribute('id'); // 移除 "請選擇" 文字的 id 屬性
    option.closest('.drop').querySelector('.dropdown').style.display = 'none';
  }

  function toggleDropdown(option) {
      var dropdown = option.nextElementSibling;
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  // 心情
  function loadImage(option, emotion) {
    // 清除之前的圖片
    document.getElementById("image-container").innerHTML = '';
    const imageUrl = option.getAttribute('data-image');
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (this.status === 200) {
        const blob = this.response;
        const imageUrl = URL.createObjectURL(blob);
        const imgElement = document.createElement('img');
        // 設定圖片的寬度和高度
        imgElement.width = 80; // 設定寬度為 80 像素
        imgElement.height = 80; // 設定高度為 80 像素
        imgElement.src = imageUrl;
        document.getElementById("image-container").appendChild(imgElement);
      } else {
        console.error('Request failed with status:', this.status);
      }
    };
    xhttp.responseType = 'blob';
    xhttp.open("GET", imageUrl);
    xhttp.send();
    // 将选定的情绪存储到隐藏字段中
    document.getElementById("selected_emotion_field").value = emotion;
  }

  // 天氣
  function loadImage1(option, emotion) {
    // 清除之前的圖片
    document.getElementById("image-container1").innerHTML = '';
    const imageUrl = option.getAttribute('data-image');
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (this.status === 200) {
          const blob = this.response;
          const imageUrl = URL.createObjectURL(blob);
          const imgElement = document.createElement('img');
          // 設定圖片的寬度和高度
          imgElement.width = 80; // 設定寬度為 80 像素
          imgElement.height = 80; // 設定高度為 80 像素
          imgElement.src = imageUrl;
          document.getElementById("image-container1").appendChild(imgElement);
        } else {
          console.error('Request failed with status:', this.status);
        }
    };
      xhttp.responseType = 'blob';
      xhttp.open("GET", imageUrl);
      xhttp.send();
      // 将选定的天氣存储到隐藏字段中
      document.getElementById("selected_weather_field").value = emotion;
  }
  // 将当前日期设置为隐藏输入字段的值
  document.getElementById("current_date_input").value = year + "-" +  month + "-" + day; 