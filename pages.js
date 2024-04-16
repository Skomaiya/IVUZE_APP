import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const 
app = express.Router();
app.get('/signup', (req, res)=>{
res.sendFile(path.join(__dirname, 'components', 'sign-up.html'));
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'components', 'login.html'));
    })
app.get('/about',(req, res)=>{
    res.sendFile(path.join(__dirname, 'components', 'about.html'));
})  
// app.get('/hospital',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'components', 'hospitals.html'));
// })  
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, 'components', 'contact.html'));
})
app.get('/doctor',(req,res)=>{
    res.sendFile(path.join(__dirname, 'components', 'doctors.html'));
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'components', 'index.html'));
})
// app.get('/dashboard',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'components', 'dashboard.html'));
// })
app.get('/service',(req,res)=>{
    res.sendFile(path.join(__dirname, 'components','service.html'));
})
app.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname, 'components','single-service.html'));
})
app.get('/booking',(req,res)=>{
    res.sendFile(path.join(__dirname, 'components','booking.html'));
})

export default app