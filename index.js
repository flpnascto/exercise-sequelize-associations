const bodyParser = require('body-parser');

const express = require('express');

const Patient = require('./controllers/patientController');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Exercício Bloco 31 dia 03');
});

app.use('/patients', Patient.getPatientsAndPlans);
app.use('/surgeries', Patient.getPatientsAndSurgeries);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});