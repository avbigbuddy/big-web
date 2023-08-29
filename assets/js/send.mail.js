document.getElementById("fetchData").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    const dataToSend = {
        name: name,
        number: number,
        email: email,
        msg: msg
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



function redirectToExample() {
    // Change the URL to the desired destination
    window.location.href = 'https://www.example.com';
  }