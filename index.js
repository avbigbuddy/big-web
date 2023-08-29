const express = require("express")
const nodemailer = require('nodemailer')
const app = express()
app.use(express.json());

app.use(express.static(__dirname));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app.html")
})

app.post("/send/mail", (req, res) => {
     var template = `<h1> ${req.body.name}</h1>
     <h1> ${req.body.email}</h1>
     <h1> ${req.body.number}</h1>
     <h1> ${req.body.msg}</h1>
     
     `
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
         port:587,
         secure:false,
         auth:{
           user:'argha.ahit@gmail.com',
           pass:"dcdecondrtjoljnq"
         }
       });
       let mailOptions = {
        from: 'argha.ahit@gmail.com',
        // to: identfiyer,
        to: "hdark6336@gmail.com",
        subject: 'Your Request by user '+ req.body.name,
        html: template
      };
      transporter.sendMail(mailOptions, (error, info) => {
           
        if (error){ return res.send({errr:error})}else{
            res.json({
                message: "Mail Send",
                
                status : 200
            })
        }
        
      });   


})
app.listen(4448, () => {
    console.log("Av Bigbuddy is live");
})