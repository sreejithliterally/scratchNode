const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    age: {
        type: Number,
        required: true,
    },
    email:{
        type: String,
        unique:true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("its not a valid email")
            }

        }
    },
    password:{
        type: String,
        required: true,
        validate(value){
            if(value.includes("password")){
                throw new Error("Password should not be password")
            }
        }

    }
})


userSchema.statics.findByCredentials = async (email, password)=>{
    console.log(`Login attempt with: ${email}`)
    const user =  await User.findOne({email})
    if(!user){
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Unable to login')
    }
    return user;
}

userSchema.pre('save',async function (next) {
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

// userSchema.statics.findByCredentials = async (email, password) => {
//     console.log(`Login attempt with email: ${email}`);  // Log the email
//     const user = await User.findOne({ email });
//     if (!user) {
//         console.log('No user found');
//         throw new Error('Unable to login');
//     }
    
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//         console.log('Password mismatch');
//         throw new Error('Unable to login');
//     }
    
//     console.log('Login successful');
//     return user;  // Return user if login is successful
// };



const User = mongoose.model('User', userSchema);


module.exports = User