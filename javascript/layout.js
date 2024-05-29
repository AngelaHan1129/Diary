const pages = {
  '/index.html': 'index.html',
  '/login.html': 'login.html',
  '/userinfo.html': 'userinfo.html',
  '/changepwd.html': 'changepwd.html',
  '/selectgender.html': 'selectgender.html',
  '/treehole.html': 'treehole.html',
  '/music.html': 'music.html',
  '/resetpwd.html': 'resetpwd.html',
  '/diary.html': 'diary.html'
}

const titles = {
  'index.html': '首頁',
  'login.html': '登入?註冊?',
  'userinfo.html': '用戶資訊',
  'changpwd.html': '變更密碼',
  'selectgender.html': '選擇性別',
  'treehole.html': '樹洞',
  'music.html': '音樂',
  'resetpwd.html': '忘記密碼',
  'diary.html': '日記'
}

const cssFiles = {
  'index.html': ['css/layout.css', 'css/layout-m.css', 'css/index.css', 'css/index-m.css'],
  'login.html': ['css/layout.css', 'css/layout-m.css', 'css/login.css', 'css/register.css', 'css/login-m.css'],
  'userinfo.html': ['css/layout.css', 'css/layout-m.css', 'css/userinfo.css', 'css/userinfo-m.css'],
  'changepwd.html': ['css/layout.css', 'css/layout-m.css', 'css/userinfo.css', 'css/userinfo-m.css'],
  'selectgender.html': ['css/layout.css', 'css/layout-m.css', 'css/userinfo.css', 'css/userinfo-m.css'],
  'treehole.html': ['css/layout.css', 'css/layout-m.css', 'css/treehole.css', 'css/treehole-m.css'],
  'music.html': ['css/layout.css', 'css/layout-m.css', 'css/music.css', 'css/music-m.css'],
  'resetpwd.html': ['css/layout.css', 'css/layout-m.css', 'css/login.css'],
  'diary.html': ['css/layout.css', 'css/layout-m.css', 'css/diary.css', 'css/diary-m.css']
}

const jsFiles = {
  'login.html': ['javascript/login.js'],
  'resetpwd.html': ['javascript/resetpwd.js'],
  'layout.html': ['javascript/layout.js'],
  'music.html': ['javascript/music.js'],
  'diary.html': ['javascript/diary.js'],
  'index.html': ['javascript/index.js'],
  'userinfo.html': ['javascript/userinfo.js'],
  'changepwd.html': ['javascript/userinfo.js', 'javascript/changepwd.js'],
  'selectgender.html': ['javascript/userinfo.js', 'javascript/changesex.js'],
  'treehole.html': ['javascript/treehole.js']
}

function layout(page) {
  fetch('layout.html')
    .then(response => response.text())
    .then(html => {
      document.body.innerHTML = html;
      fetch(page)
        .then(response => response.text())
        .then(pageHtml => {
          checklogin()
          const main = document.querySelector('main');
          main.innerHTML = pageHtml;
          const title = titles[page]
          const cssFile = cssFiles[page];
          const jsFile = jsFiles[page];
          if (title) {
            document.title = title;
          }
          if (cssFile) {
            cssFile.forEach(cssfile => {
              const link = document.createElement('link')
              link.rel = 'stylesheet';
              link.href = cssfile;
              document.head.appendChild(link)
            });
          }
          if (jsFile) {
            jsFile.forEach(jsfile => {
              const script = document.createElement('script');
              script.src = jsfile;
              script.async = true;
              document.body.appendChild(script);
            })
          }
        })
        .catch(error => {
          console.error('加載指定頁面失敗：', error);
        });
    })
    .catch(error => {
      console.error('加載佈局失敗：', error);
    });
}

window.addEventListener('DOMContentLoaded', function () {
  const pathname = window.location.pathname;
  let page = pages[pathname] || 'index.html';
  layout(page);
});

const checklogin = () => {
  const user = localStorage.getItem('userData');
  if (user) {
    const logoutLinks = document.querySelectorAll('header #logintext');
    logoutLinks.forEach(link => {
      link.innerText = '登出';
      link.addEventListener('click', () => {
        localStorage.removeItem('userData');
        link.innerText = '登入';
      });
    });
  }
}

async function getUserData() {
  const token = await localStorage.getItem('userData')
  console.log(token)
  await fetch(`http://localhost:8000/api/getuser_by_token`, {
    headers: {
      Authorization: token
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      data = data.data
      account = data.user
      document.getElementById("infoname").innerText = data.Account
      console.log(data.Email)
    })
    .catch(error => {
      console.error('發生錯誤:', error);
    });
}

getUserData()

