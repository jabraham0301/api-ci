const express=require('express')
const moment=require('moment')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
let obj={
    horas:null,
    minutos:null
}

app.post('/api/set_time',(req,res)=>{
    let {horas,minutos}=req.body
    Object.assign(obj,{horas,minutos})
    res.status(200).json({})
})
app.get('/api/time_match',(req,res)=>{
    console.log(obj)
    console.log(moment().hours())
    console.log(moment().minutes())
    if(moment().hours()==obj.horas&&moment().minutes()==obj.minutos){
        res.status(200).send(true)
    }else{
        res.status(200).send(false)
    }

})

let PORT=process.env.PORT||3030
app.listen(PORT,()=>console.log(`SERVER RUNNING ON PORT ${PORT}`))