import Note from "../../models/Note.js"
export async function getAllNotes (req,res) {
    try{
        const notes = await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    }
    catch(error){
        console.error("Error in getAllNotes controller",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export async function createNote (req,res){
    try{
        const {title, content} = req.body
        const newNote = new Note({title:title,content:content})

        const savedNote = await newNote.save()
        res.status(201).json(savedNote)
    }
    catch(error){
        console.error("Error in createNote controller", error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function getNoteById (req,res) {
    try{
        const notes = await Note.findById(req.params.id)
        res.status(200).json(notes)
    }
    catch(error){
        console.error("Error in getNoteById controller",error)
        res.status(500).json({message: "Internal server error"})
    }
}   

export async function updateNote (req,res){
    try{
        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content},{new: true,})
        if(!updatedNote) return res.json({message: "Note not found"})
        res.status(200).send(updatedNote)
    }
    catch(error){
        console.error("Error in updateNote controller",error)
        res.status(500).json({message: "Internal server error"})
    }
}

export async function deleteNote (req,res){
    try{
        const deteledNode = await Note.findByIdAndDelete(req.params.id)
        if(!deteledNode) return res.json({message: "Note not found"})
        res.status(200).send(deteledNode)
    }
    catch(error){
        console.error("Error in deleteNote controller",error)
        res.status(500).json({message: "Internal server error"})
    }
}