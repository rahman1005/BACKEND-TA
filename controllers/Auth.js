import Admin from "../models/M_admin.js";
import  argon2  from "argon2";

export const login = async (req, res)=>{
    const admin = await Admin.findOne({
        where:{
            email: req.body.email
        }
    })
    if(!admin) return res.status(404).json({msg:"User tidak ditemukan"});
    const match = await argon2.verify(admin.password, req.body.password);
    if(!match) return res.status(400).json({msg:"password salah"})
    req.session.userId = admin.uuid;
    const uuid =admin.uuid;
    const name = admin.name;
    const email = admin.email;
    const nohp = admin.nohp;
    const role = admin.role;
    res.status(200).json({uuid, name,nohp, email, role});
}

export const Me = async (req, res)=>{
    if(!req.session.userId){
        return res.status(401).json({msg:"mohon login dengan akun anda"})
    }
    const admin = await Admin.findOne({
        attributes:['uuid','name','email', 'role'],
        where:{
            uuid: req.session.userId
        }
    })
    if(!admin) res.status(404).json({msg:"User tidak ditemukan"});
    res.status(200).json(admin);
}
export const logOut =  (req, res)=>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg:" tidak dapat logout"});
        res.status(200).json({msg: "Anda telah logOut"})
    })
}