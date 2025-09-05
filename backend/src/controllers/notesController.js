import Note from "../../models/Note.js"
export async function getAllNotes (req,res) {
    try{
        const notes = Note.find()
        res.status(200).json(notes)
    }
    catch(error){
        console.error("Error in getAllNotes controller",error)
        res.status(500).json({message: "Internal server error"})
    }
    res.status(200).send("You just fetched notes")
}

export function createNote (req,res){
    res.status(201).json({message: "Note created sucessfully"})
}

export function updateNote (req,res){
    res.status(200).send("Note updated sucessfully")
}

export function deleteNote (req,res){
    res.status(200).send("Note deleted sucessfully")
}