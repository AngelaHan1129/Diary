async function selectgender() {
    try {
        const respones = await  fetch('http://localhost:8000/api/change_sex', {
            method: 'put',
            body: json
        })
        const selectgender = await document.querySelector('.selectgender')
        const gender = await document.querySelector('gender')
        
        console.log(selectgender)
        
        // event.preventDefault();
        // const formDataR = new FormData(forRegister);
        // let object = {};
        // formDataR.forEach((value, key) => object[key] = value);
        // let json = JSON.stringify(object);
        // fetch('http://localhost:8000/api/register', {
        //   method: 'post',
        //   body: json
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     console.log(data)
        //     errmsg = msg.replace("",data.msg)
        //     console.log(errmsg)
        //     document.getElementById('registermsg').innerText = errmsg;

        //   })
    }
    catch (err) {
        console.log(err)
    }
}
selectgender()