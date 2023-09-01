document.getElementById("fetchData").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;
    const opt1 = document.getElementById("opt-1").value;
    const opt2 = document.getElementById("opt-2").value;
    const opt3 = document.getElementById("opt-3").value;
    const opt4 = document.getElementById("opt-4").value;
    const opt5 = document.getElementById("opt-5").value;

    const dataToSend = {
        name: name,
        number: number,
        email: email,
        msg: msg,
        data: [
            opt1,
            opt2,
            opt3,
            opt4,
            opt5
        ]
    };
    
    fetch("http://127.0.0.1:4448/send/mail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
       
    })
    .catch(error => {
        console.log(error)
    });
});


