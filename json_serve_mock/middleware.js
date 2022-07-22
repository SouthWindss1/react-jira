module.export = (req,res,next)=>{
    if(req.method==='POST' && req.path === '/login'){
        if(req.body.username === 'liudong' && req.body.password ==='123456'){
            return res.status(200).json({
                user:{
                    token:"123456"
                }
            })
        }
    }else{
        return res.status(400).json({
            message:'账号密码错误'
        })
    }
    next()
}