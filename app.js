const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/loyalwallet');
const port = process.env.PORT || 3030;
const loyalwalletUser = require('./models/userModel');

