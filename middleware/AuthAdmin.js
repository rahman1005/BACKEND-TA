import Admin from "../models/M_admin.js";
export const verifyUser = async( req, res, next )=>{
    if(!req.session.userId){
        return res.status(401).json({msg:"mohon login dengan akun anda"})
    }
    
    const admin = await Admin.findOne({
        where:{
            uuid: req.session.userId 
        }
    })
    if(!admin) return res.status(404).json({msg:"User tidak ditemukan"});
    req.userId = admin.id;
    req.role = admin.role;
    next();
    
}
export const adminOnly = async( req, res, next )=>{
    const admin = await Admin.findOne({
        where:{
            uuid: req.session.userId
        }
    })
    if(!admin) return res.status(404).json({msg:"User tidak ditemukan"});
    if(admin.role !=="admin") return res.status(403).json({msg:"Akses Denied"});
    next();

}
