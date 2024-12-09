const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Get all users data in your admin panal 

// const getAdmindata = async (req, res) =>{
//     try{
//         const user = await userModel.find({}, {password: 0}).sort({_id : -1});
//         // console.log(user);
//         if(!user || user.length === 0) {
//             return res.status(404).json({message: "no users found"})
//         }
//         res.status(201).json(user);
//     }
//     catch(error){
//         res.status(404).json({
//             message: "admin data not found",
//             success: false
//         })
//     }
// }

const getAdmindata = async (req, res) => {
    const { page = 1, limit = 10, search = "", sortBy = "_id", order = "desc" } = req.query;
  
    try {
      const filter = search
        ? {
            $or: [
              { username: { $regex: search, $options: "i" } },
              { email: { $regex: search, $options: "i" } },
            ],
          }
        : {};
   
      const sortOrder = order === "asc" ? 1 : -1;
  
      // Fetch data with pagination, filtering, and sorting
      const users = await userModel
        .find(filter, { password: 0 }) // Exclude passwords
        .sort({ [sortBy]: sortOrder }) // Sorting
        .skip((page - 1) * limit) // Pagination 
        .limit(parseInt(limit)); // Limit
  
      const totalUsers = await userModel.countDocuments(filter); // Total users matching the filter
  
      res.status(200).json({
        success: true,
        data: users,
        totalPages: Math.ceil(totalUsers / limit),
        currentPage: parseInt(page),
        totalUsers,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching admin data",
      });
    }
  };
  

// Get users data for by id

    const getUsersDataById = async (req, res) =>{
        try{
            const getusersdatabyid = await userModel.findById(req.params.id, {password: 0});
            if(!getusersdatabyid){
                res.status(404).json({
                    message: "users not found"
                })
            }
            res.status(200).json({
                message: "get users data successfully!",
                data: getusersdatabyid,
            })
        }
        catch(error){
            res.status(404).json({
                message: "get users data failed"
            })
        }
    }

    // update users data by id

const updateUsersDataById = async (req, res) =>{
        try{
            const updateusersdatabyid = await userModel.findByIdAndUpdate(req.params.id, req.body, {new : true});
            if(!updateusersdatabyid){
                res.status(400).json({
                    message: "users data not found for update"
                })
            }
            res.status(200).json({
                message: "data update successfully!",
                data: updateusersdatabyid,
            })
        }
        catch(error){
            res.status(404).json({
                message: "data updation failed"
            })
        }
    }

// delete users data jo signup karte samay mila tha 

const deleteUserData = async (req, res) =>{
    try{
        const deleteUser = await userModel.findByIdAndDelete(req.params.id);
        if(!deleteUser){
            res.status(404).json({message: "user not found"})
        }
        res.status(200).json({message: "user delete successfully"})
    }
    catch(error){
        res.status(406).json({
            message: "user delete failed"
        })
    }
}

const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" }); 
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Ensure the user has admin privileges
        if (!user.isAdmin) { // Check for 'isAdmin' instead of 'isLogin'
            return res.status(403).json({ message: "Unauthorized admin access" });
        }

        // Generate a token (if applicable)
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        // Send success response
        return res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, email: user.email, isAdmin: user.isAdmin },
        });
    } catch (error) {
        console.error("Error in adminLogin:", error);
        return res.status(500).json({ message: "Server error" });
    }
};
  
module.exports = {
    getAdmindata,
    deleteUserData,
    getUsersDataById,
    updateUsersDataById,
    adminLogin
}