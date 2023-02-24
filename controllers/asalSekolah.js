import asalSekolah from "../models/M_asalSekolah.js"


export const getAsalSekolah = async (req, res)=>{
    try{
        const response = await asalSekolah.findAll()
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getasalSekolahById = async (req, res)=>{
    try{
        const response = await asalSekolah.findOne({
            where:{
                uuid:req.params.id
            }
        })
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createAsalSekolah = async (req, res)=>{
    const {namaSekolah, statusSekolahId} = req.body;
    try { 
        await asalSekolah.create({
            namaSekolah:namaSekolah,
            statusSekolahId: statusSekolahId,
        })
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateAsalSekolah = async (req, res)=>{
    const response = await asalSekolah.findOne({
        where:{
            uuid:req.params.id
        }
    })
    if(!response) return res.status(404).json({msg:"data tidak ditemukan"})
    const {namaSekolah, statusSekolahId} = req.body;
    if (!namaSekolah) {
        namaSekolah = response.namaSekolah;
    }
    if (!statusSekolahId) {
        statusSekolahId = response.statusSekolahId;
    }
    try {
        await asalSekolah.create({
            namaSekolah:namaSekolah,
            statusSekolahId: statusSekolahId,
        })
        res.status(201).json({msg:'data berhasil di update'})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteAsalSekolah = async (req, res)=>{
    const response = await asalSekolah.findOne({
        where:{
            uuid:req.params.id
        }
    })
    if(!response) return res.status(404).json({msg:"data tidak ditemukan"})
    try {
        await asalSekolah.destroy({
            where:{
                uuid: req.params.id
            }
        })
        res.status(201).json({msg:"Admin berhasil dihapus"})
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
    
}
