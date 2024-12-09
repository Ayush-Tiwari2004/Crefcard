const userModel = require('../models/user')

const uploadProfilePic =  async (req, res) => {
    try {
        const userId = req.body.userId;
        const profilepic = `https://crefcard.onrender.com/images/${req.file.filename}`;
        
        // Update user's profile picture in DB
        const updatedUser = await userModel.findByIdAndUpdate(
            userId, 
            { profilepic }, 
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ 
            message: 'Profile picture updated successfully', 
            profilepic: updatedUser.profilepic 
        });
    } catch (error) {
        console.error('Profile picture update error:', error);
        res.status(500).json({ message: 'Error updating profile picture', error });
    }
};

module.exports = uploadProfilePic;