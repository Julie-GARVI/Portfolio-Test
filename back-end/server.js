require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const validator = require('validator');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello from API");
});

app.post('/sendEmail', async (req, res) => {
    const { lastname, firstname, email, message } = req.body;

    if (!lastname || !firstname || !email || !message) {
        return res.status(400).json({ message: 'Ce champ est obligatoire' });
    }

    const regex = /[`^#$%^&*\{}|<>~]/;
    if (regex.test(lastname) || regex.test(firstname) || regex.test(message)) {
        return res.status(400).json({ message: 'Certains champs contiennent des caractères non autorisés.' });
    }

    const escapedLastname = validator.escape(lastname);
    const escapedFirstname = validator.escape(firstname);
    const escapedEmail = validator.escape(email);
    const escapedMessage = validator.escape(message);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: escapedEmail,
        to: 'julie.garvi@gmail.com',
        subject: 'Nouveau message depuis mon portfolio',
        text: `
            Nom: ${escapedFirstname} ${escapedLastname}
            Email: ${escapedEmail}
            Message: ${escapedMessage}
        `
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email envoyé:', info.response);
        return res.status(200).json({ message: 'Email envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});