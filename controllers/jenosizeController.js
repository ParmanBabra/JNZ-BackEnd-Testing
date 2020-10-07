const express = require('express');
const https = require('https');
const axios = require('axios');
const config = require('./../config');
const { game24 } = require('./../helpers/game24');

const { google } = require('googleapis');

const getSearchPlace = async (req, res) => {
  let query = '';
  if (req.query.query) {
    query = req.query.query.replace(' ', '+');
  }
  let requestResult = await axios.get(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${config.default.GOOGLE_API}`,
  );
  const {
    data: { results },
  } = requestResult;

  res.json(results);
};

const getCalcutate = async (req, res) => {
  let number = [];
  if (req.query.a) {
    number.push(parseFloat(req.query.a));
  }

  if (req.query.b) {
    number.push(parseFloat(req.query.b));
  }

  if (req.query.c) {
    number.push(parseFloat(req.query.c));
  }

  if (req.query.d) {
    number.push(parseFloat(req.query.d));
  }

  var results = game24(number);
  res.json(results);
};
module.exports = { getSearchPlace, getCalcutate };
