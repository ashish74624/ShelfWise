import Publisher from '../models/Publisher.js'

export const addPublisher = async(req,res)=>{
    const { name } = req.body;
    try{
        const pub = await Publisher.create({Publisher_Name:name});
        await pub.save();
        return res.status(200).json({message:'Publisher Added'});
    }catch{
        return res.status(404).json({message:'Publisher Not Added'});
    }
}

export const getPublishers = async(req,res)=>{
    try{
        const pub = await Publisher.find({});
        return res.status(200).json({publisher:pub,message:'Publishers Fetched'})
    }catch{
        return res.status(404).json({message:'Publishers no Found'})
    }
}

export default { addPublisher,getPublishers };