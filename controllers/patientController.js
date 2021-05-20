const express = require('express');
const { Patient, Plan, Surgery } = require('../models');

const getPatientsAndPlans = async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: { model: Plan, as: 'plan' }
    });
    res.status(200).json(patients);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getPatientsAndSurgeries = async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: { model: Surgery, as: 'surgery', through: { attributes: [] } }
    });
    res.status(200).json(patients);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  getPatientsAndPlans,
  getPatientsAndSurgeries,
}