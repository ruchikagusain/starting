
app.use(middleware)

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(3000)