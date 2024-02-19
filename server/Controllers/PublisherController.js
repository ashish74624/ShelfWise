import Publisher from '../models/Publisher.js'

const addPublisher = async(req,res)=>{
    const { name } = req.body;
    try{
        const pub = await Publisher.create({Publisher_Name:name});
        await pub.save();
        return res.status(200).json({message:'Publisher Added'});
    }catch{
        return res.status(404).json({message:'Publisher Not Added'});
    }
}

export default {addPublisher};