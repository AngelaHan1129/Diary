const pages = {
    '/admusic.html': 'admusic.html',
    '/admin_emotional.html': 'admin_emotional.html',
    '/aduser.html': 'aduser.html',
    '/adpwd.html': 'adpwd.html',
    '/adgender.html': 'adgender.html'
}

const titles = {
    'admusic.html': 'Admusic',
    'admin_emotional.html': '心情小站',
    'aduser.html': '管理員資料',
    'adpwd.html': '管理員密碼',
    'adgender.html': '管理員性別'
}

const cssFiles = {
    'admusic.html': ['css/adlayout.css', 'css/admusic.css'],
    'admin_emotional.html': ['css/adlayout.css', 'css/emotional.css'],
    'aduser.html': ['css/adlayout.css', 'css/aduser.css'],
    'adpwd.html': ['css/adlayout.css', 'css/aduser.css'],
    'adgender.html': ['css/adlayout.css', 'css/aduser.css']
}

const jsFiles = {
    'admusic.html': ['javascript/manage.js'],
    'admim_emotional.html': ['javascript/manage.js'],
    'aduser.html': ['javascript/manage.js', 'javascript/userinfo.js'],
    'adpwd.html': ['javascript/manage.js', 'javascript/userinfo.js'],
    'adgender.html': ['javascript/manage.js']
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
                        const script = document.createElement('script');
                        script.src = jsFile;
                        document.body.appendChild(script);
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
