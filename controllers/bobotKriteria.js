import asalSekolah from "../models/M_asalSekolah.js";
import bobotKriteria from "../models/M_bobotKriteria.js"


export const getBobotKriteria = async (req, res)=>{
    try {
        const response = await bobotKriteria.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getBobotKriteriaById = async (req, res)=>{
    try {
        const response = await bobotKriteria.findOne({
            where:{
                uuid: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBobotKriteria = async (req, res)=>{
    const {bobot, kriteriaId} = req.body;
    try {
        await bobotKriteria.create({
            bobot: bobot,
            kriteriaId: kriteriaId
        })
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateBobotKriteria = async (req, res)=>{
    const Bobot = await bobotKriteria.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if (!Bobot) return res.status(404).json({msg:"data tidak ditemukan"})
    const {bobot, kriteriaId} = req.body;
    if (!bobot) {
        bobot= Bobot.bobot;
    }
    if (kriteriaId) {
        kriteriaId = Bobot.kriteriaId;
    }

    try {
        await bobotKriteria.update({
            bobot: bobot,
            kriteriaId: kriteriaId
        })
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteBobotKriteria = async (req, res)=>{
    const Bobot = await bobotKriteria.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if (!Bobot) return res.status(404).json({msg:"data tidak ditemukan"})
    try {
        await bobotKriteria.destroy({
            where:{
                uuid:req.params.id
            }
        })
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

