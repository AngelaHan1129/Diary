async function addSentence() {
    let btn = document.querySelector("#add");
    let infoModal = document.querySelector("#infoModalSentence");
    let close = document.querySelector("#closeSentence");
    btn.addEventListener("click", function () {
        infoModal.showModal();
    })
    close.addEventListener("click", function () {
        infoModal.close();
    })
}

addSentence()

async function showSentence(pagenow) {
    try {
        let str = '<table id="page-sentence"><tr>';
        let tab = '';
        let total = '';
        let res = await fetch('http://localhost:8000/api/admin_show_sentence_all');
        let body = await res.json();
        let sentence = body.data[0];
        console.log(sentence)
        let MaxPage = Math.ceil(sentence.length / 5);
        let NowPage = Math.max(1, Math.min(pagenow, MaxPage || 1));
        let itemsPerPage = 5;
        let start = (NowPage - 1) * itemsPerPage;
        let end = start + itemsPerPage;
        total = sentence.length
        let pageItems = sentence.slice(start, end);
        if (NowPage > 1) {
            str += `<td><a href="#" onclick="showSentence(1)">&lt;&lt;</a></td>`;
            str += `<td><a href="#" onclick="showSentence(${NowPage - 1})">&lt;</a></td>`;
        }
        for (let page = Math.max(1, NowPage - 2); page <= Math.min(NowPage + 2, Math.ceil(sentence.length / itemsPerPage)); page++) {
            if (page === NowPage) {
                str += `<td>${page}</td>`;
            } else {
                str += `<td><a href="#" onclick="showSentence(${page})">${page}</a></td>`;
            }
        }
        if (NowPage < MaxPage) {
            str += `<td><a href="#" onclick="showSentence(${NowPage + 1})">&gt;</a></td>`;
            str += `<td><a href="#" onclick="showSentence(${MaxPage})">&gt;&gt;</a></td>`;
        }
        pageItems.forEach(function (sentence) {
            tab += `
            <tr>
                <td class="type">${sentence.Type_Name}</td>
                <td class="content">${sentence.Content}</td>
                <td class="btns">
                    <div>
                        <input type="submit" value="刪除" class="delete">
                        <input type="submit" value="修改" class="edit">
                    </div>
                </td>
            </tr>            
            `;
        });

        str += '</tr></table>';
        document.getElementById('items').innerHTML = tab;
        document.getElementById('pages-sentence').innerHTML = str;
        document.getElementById('sentence-total').innerHTML = total;
    } catch (err) {
        console.error('Failed to fetch data:', err);
        document.getElementById('items').innerHTML = '<p>Error loading data.</p>';
    }
}

showSentence(1);
