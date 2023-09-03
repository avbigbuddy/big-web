const express = require("express")
const nodemailer = require('nodemailer')
//const cors = require("cors")
const app = express()
app.use(express.json());
//app.use(cors())

app.use(express.static(__dirname));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/layout/app.html")
})
app.get("/thanku", (req, res) => {
    res.sendFile(__dirname + "/layout/thanku.html")
})

app.post("/send/mail", (req, res) => {
     var template = `
     <h1> Hey its  ${req.body.name}</h1>
     <h2>Name: ${req.body.name}</h2>
     <h2>Email: ${req.body.email}</h2>
     <h2>Number: ${req.body.number}</h2>
     <h2>Msg: ${req.body.msg}</h2>
     <h1>What ${req.body.name} want?</h1>
     <h2>Service: ${req.body.data}</h2>
     
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
        to: "avbigbuddy@gmail.com",
        subject: 'Your Request by user '+ req.body.name,
        html: template
      };
      transporter.sendMail(mailOptions, (error, info) => {
           
        if (error){ 
          return res.redirect('/')
        }else{

            return res.send({
                status: true
            })
        }
        
      });   


})
app.listen(8080, () => {
})
