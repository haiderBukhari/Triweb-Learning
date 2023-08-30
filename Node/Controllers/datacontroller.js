module.exports.getallmovies = (req, res)=>{
    res.status(200).json({
        status: "success", 
        date: req.date
    });
}
module.exports.postallmovies= (req, res)=>{
    const body = req.body;
    res.json({
        status: "success",
        data: [
            body
        ]
    })
}
