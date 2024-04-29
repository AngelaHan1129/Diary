const pages = {
    '/index.html': 'index.html',
    '/login.html': 'login.html',
    '/userinfo.html': 'userinfo.html',
    '/changepwd.html': 'changepwd.html',
    '/selectgender.html': 'selectgender.html',
    '/treehole.html': 'treehole.html',
    '/music.html': 'music.html',
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
    'diary.html': '日記'
}

const cssFiles = {
    'index.html': ['css/layout.css', 'css/layout-m.css', 'css/index.css', 'css/index-m.css'],
    'login.html': ['css/layout.css', 'css/layout-m.css', 'css/login.css', 'css/register.css'],
    'userinfo.html': ['css/layout.css', 'css/layout-m.css', 'css/userinfo.css'],
    'changepwd.html': ['css/layout.css', 'css/layout-m.css', 'css/userinfo.css'],
    'selectgender.html': ['css/layout.css', 'css/layout-m.css', 'css/userinfo.css'],
    'treehole.html': ['css/layout.css', 'css/layout-m.css', 'css/treehole.css', 'css/treehole-m.css'],
    'music.html': ['css/layout.css', 'css/layout-m.css', 'css/music.css'],
    'diary.html': ['css/layout.css', 'css/layout-m.css', 'css/diary.css', 'css/diary-m.css']
}

const jsFiles = {
    'login.html': ['javascript/login.js'],
    'music.html': ['javascript/music.min.js'],
    'diary.html': ['javascript/diary.js'],
    'index.html': ['javascript/index.js'],
    'userinfo.html': ['javascript/userinfo.js'],
    'changepwd.html': ['javascript/userinfo.js','javascript/changepwd.js'],
    'selectgender.html':['javascript/userinfo.js','javascript/changesex.js'],
    'treehole.html':['javascript/treehole.js']
}

function layout(page) {
    fetch('layout.html')
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html;
            fetch(page)
                .then(response => response.text())
                .then(pageHtml => {
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

window.addEventListener('load', function() {
    const pathname = window.location.pathname;
    let page = pages[pathname] || 'index.html';
    layout(page);
});
