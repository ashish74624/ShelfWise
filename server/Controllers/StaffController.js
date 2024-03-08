import Staff from "../models/Staff";
import bcrypt from 'bcrypt'

export const register=async(req,res)=>{
     try {
        let user = await Staff.findOne({email:req.body.email});
        if(user){
            return res.json({status: 'error', msg:'Email already exists'});
        }
        const newPassword = await bcrypt.hash(req.body.password, 10);
        const newStaff = await Staff.create({
            Staff_Name:req.body.Staff_Name,
            Staff_Email:req.body.email,
            password: newPassword,
        }); 
        await newStaff.save();   
        return res.json({ done:true });

    }catch (err) {  
        return res.json({ done:false, error: err });
    }   
}

export const login = async(req,res)=>{
    const { email, password } = req.body;
    try {
      const user = await Staff.findOne({ email: email });
      if (!user) {
        res.json({ done :false, msg: 'Staff does not exists' });
      } else {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
          const userWithoutPassword = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            profileImage: user.profileImage,
          };
          res.json({ done:true, user: userWithoutPassword });
        } else {
          res.json({ done :false, msg: 'Invalid Password' });
        }
      }
    } catch (err) {
      res.json({ done :false, error: err.message });
    }
}


export default { register, login }