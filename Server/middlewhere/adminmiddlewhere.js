
const adminmiddlewhere = (req, res, next) =>{
    try{        
        if(!req.user || !req.user.isAdmin){
            return res.status(403).json({
                message: "Access denid admins only!"
            })
        }
        next();
    }
    catch(error){
        res.status(404).json({
            message: "you can not access data of the admin route"
        })
    }
}

module.exports = adminmiddlewhere;