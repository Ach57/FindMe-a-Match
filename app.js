require('dotenv').config(); 
const bodyParser = require('body-parser');
const express = require('express'); //Express module 
const admin = require('firebase-admin'); //fire-base Module
const serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_CREDENTIALS, 'base64').toString('utf-8')); //key
admin.initializeApp({ //intialization
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req,res, next)=>{
    const clientIP = req.ip;
    console.log(clientIP)
    next();
})


app.get('/',(req,res)=>{
    res.render('index');

})


app.get('/home', (req,res)=>{
    res.render('home')
})

app.post('/submit', async (req,res)=>{
    try{
        const formData ={
            firstName: req.body.firstName,
            email: req.body.email,
            age: req.body.age,
            about: req.body.about,
            attributes: {
                smart: req.body.smartSlider,
                empathetic: req.body.empatheticSlider,
                funny: req.body.funnySlider,
                caring: req.body.caringSlider,
                manly: req.body.manlySlider,
                patient: req.body.patientSlider,
                artist: req.body.artistSlider,
              },
        };

        // Store in Firestore
        await db.collection('SalimaApplications').add(formData);
        // Send a response
        res.send('Form submitted successfully!');
    } catch(error){
        console.error('Error adding document: ', error);
        res.status(500).send('Error submitting form');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

