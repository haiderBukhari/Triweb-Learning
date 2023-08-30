const Post = require('../models/task1_model')
module.exports.AddUserData = async(req, res) =>{
    const {name, email} = req.body;
    const newuser = new Post(name, email);
    await newuser.savedata()
    const alldata = await newuser.getalldata()
    res.status(200).json({
        status: "success",
        data: alldata
    })
}

module.exports.GetUserData = async(req, res) =>{
    const newuser = new Post();
    const cdata = await newuser.getalldata();
    res.status(200).send({
        status: "success", 
        data: cdata
    })
}
module.exports.GetIdData = async (req, res) =>{
    const data = new Post();
    const getiddata = await data.getiddata(req.params.id);
    if(!getiddata.length){
        return res.status(200).json({
            status: "fail",
            message: "No data found"
        })
    }
    res.status(200).json({
        status:"success", 
        data: getiddata
    })
}