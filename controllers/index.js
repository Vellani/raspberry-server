
const path = require('path')
const {io} = require('../requirements')

const findIndex =  (req, res) => {
    res.sendFile(path.join(__dirname, '..', "/resourses/templates/index.html"))
}

const setNewVoltage = (req, res) => {
    //runWithDelay(10);

    const {voltage} = req.query;
    io.emit('update', voltage);

    res.status(200).send("Starting Countdown")
}

function runWithDelay(n) {
    if(n < 1) return;

    setTimeout(function() {

        io.emit('update', n);
        
        console.log(`Loop: ${n}`)
    
        runWithDelay(n - 1);
      }, 1000); 
}

module.exports = {findIndex, setNewVoltage}