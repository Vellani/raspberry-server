
const path = require('path')
const {io} = require('../requirements')

const findIndex =  (req, res) => {
    res.sendFile(path.join(__dirname, '..', "/resourses/templates/index.html"))
}

const setNewVoltage = (req, res) => {
    const {voltage} = req.query;
    io.emit('update', voltage);

    res.status(200).send("Starting Countdown")
}


module.exports = {findIndex, setNewVoltage}