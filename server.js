// server.js
const express = require('express');

const app = express();
const PORT = 3000;

const API_PREFIX = '/api/v1';

// Если мы сделаем POST-запрос сюда, то получим верный ответ
// Если отправим GET-запрос, то получим либо 405 HTTP ошибку, либо 404
app.get(`${API_PREFIX}/text`, (req, res) => {
	res.send('Hello, World!');
});

const RESPONSE_DATA = { data: { items: [1, 2, 3] } };
app.put(`${API_PREFIX}/json`, (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.status(201).send(RESPONSE_DATA);
});

app.listen(PORT, () => {
	console.log(`Мой текст и порт: ${PORT}!`);
});
