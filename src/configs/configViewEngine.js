const express = require('express');
const path = require('path');

const viewEngineConfig = (app) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join('./src', 'public')));
};

module.exports = viewEngineConfig;
