
import mongoose from "mongoose"

const options = {
    collection: 'proyectos',
    strict: true,

    collation: {
        locale:"es",
        strength: 1,
    }
}




const proyectoSchema = new mongoose.Schema({


    nombre: String,
    

    portada: String,


    imagenes:[String], 


    descripcion: String, 


    tools: [String],
    
   


    createdAt: {

        type: Date, 
        default: Date.now

    },





},options)



export const Proyecto = mongoose.model('proyectos', proyectoSchema)