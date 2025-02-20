import Contact from "../models/contactModal.js";

export const CreateContact=async(req, res) =>{
    
    try{

        const{names, email, subject, message, phone, status}=req.body;
        const newContact=new Contact({names, email,subject,message,phone, status});

        await newContact.save();
        res.status(201).json({success:true, message:"Contact created successfully"})
    }catch(error){
        res.status(500).json({error: false, message:"Server error", error:error.message});

    }
}