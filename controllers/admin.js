import Admin from "../models/M_admin.js"



import  argon2  from "argon2"

export  const getAdmin = async (req, res)=>{
    try{
        const response = await Admin.findAll()
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}
export  const getAdminById = async (req, res)=>{
    try{
        const response = await Admin.findOne({
            where:{
                uuid: req.params.id
            }
        })
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}
export  const createAdmin = async (req, res)=>{
    const {name, email,nohp, password, confPassword, role} = req.body;
    const admin = await Admin.findOne({
        where:{
            email:email
        }
    });
    if(admin) return res.status(201).json({msg:'Account already exist'})
    if (password !== confPassword) return res.status(400).json({msg:"password dan konfirmasi password tidak sama"})
    const hashPassword = await argon2.hash(password);
    try{
        await Admin.create({
            name: name,
            email:email,
            nohp: nohp,
            password: hashPassword,
            role: role
        });
         res.status(201).json({msg:" registrasi berhasil"})
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}
export  const updateAdmin = async (req, res)=>{
    const admin = await Admin.findOne({
        where:{
            uuid: req.params.id
        }
    })
    if(!admin) return res.status(404).json({msg:"Admin tidak ditemukan"})
    const {name, email,nohp, password, confPassword, role} = req.body;
    let hashPassword;
    if(password ==="" || password ===null){
        hashPassword = admin.password
    }else{
        hashPassword = await argon2.hash(password)
    }
    if (password !== confPassword) return res.status(400).json({msg:"password dan konfirmasi password tidak sama"})

    try{
        await Admin.update({
            name: name,
            email:email,
            nohp: nohp,
            password: hashPassword,
            role: role
        },{
            where:{
                id:admin.id
            }
        });
         res.status(201).json({msg:"data berhasil di update"})
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}
export  const deleteAdmin = async(req, res)=>{
    const admin = await Admin.findOne({
        where:{
            uuid: req.params.id
        }
    })
    if(!admin) res.status(404).json({msg:"Admin tidak ditemukan"})
    try{
        await Admin.destroy({
            where:{
                id:admin.id
            }
        });
         res.status(201).json({msg:"Admin berhasil dihapus"})
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

