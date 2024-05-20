const pages = {
    '/admusic.html': 'admusic.html',
    '/ademotion.html': 'ademotion.html',
    '/aduser.html': 'aduser.html',
    '/adpwd.html': 'adpwd.html',
    '/adgender.html': 'adgender.html',
    '/admember.html': 'admember.html',
    '/adsentence.html': 'adsentence.html',
    '/adreport.html': 'adreport.html'
}

const titles = {
    'admusic.html': '音樂庫',
    'ademotion.html': '心情小站',
    'aduser.html': '管理員資料',
    'adpwd.html': '管理員密碼',
    'adgender.html': '管理員性別',
    'admember.html': '管理會員',
    'adsentence.html': '名言佳句',
    'adreport.html': '管理員報表'
}

const cssFiles = {
    'adreport.html': ['css/adlayout.css', 'css/adlayout-m.css', 'css/adreport.css', 'css/adreport-m.css'],
    'admember.html': ['css/adlayout.css', 'css/adlayout-m.css', 'css/admember.css', 'css/admember-m.css'],
    'adsentence.html': ['css/adlayout.css', 'css/adlayout-m.css', 'css/adsentence.css', 'css/adsentence-m.css'],
    'ademotion.html': ['css/adlayout.css', 'css/adlayout-m.css', 'css/ademotion.css', 'css/ademotion-m.css'],
    'admusic.html': ['css/adlayout.css', 'css/adlayout-m.css', 'css/admusic.css', 'css/admusic-m.css'],
    // 'aduser.html': ['css/adlayout.css', 'css/aduser.css'],
    // 'adpwd.html': ['css/adlayout.css', 'css/aduser.css'],
    // 'adgender.html': ['css/adlayout.css', 'css/aduser.css'],
}

const jsFiles = {
    'adreport.html': ['javascript/manage.js','javascript/adreport.js'],
    'admember.html': ['javascript/manage.js','javascript/admember.js', 'javascript/sortdiv.js'],
    'adsentence.html': ['javascript/manage.js','javascript/adsentence.js', 'javascript/sorttable.js'], 
    'ademotion.html': ['javascript/manage.js','javascript/ademotion.js'],
    'admusic.html': ['javascript/manage.js','javascript/admusic.js', 'javascript/sortdiv.js']
    // 'aduser.html': ['javascript/manage.js', 'javascript/userinfo.js'],
    // 'adpwd.html': ['javascript/manage.js', 'javascript/userinfo.js'],
    // 'adgender.html': ['javascript/manage.js'],
}

function layout(page) {
    fetch('adlayout.html')
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
