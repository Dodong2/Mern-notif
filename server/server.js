// notif123
const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://carldong:notif123@cluster0.642xs.mongodb.net/notif?retryWrites=true&w=majority&appName=Cluster0')

const cors = require('cors')

app.use(express.json())
app.use(cors())

const UserRoutes = require('./routes/Userlist')
app.use('/users', UserRoutes)

app.listen(3003, () => {
    console.log('server running: 3003' )
})