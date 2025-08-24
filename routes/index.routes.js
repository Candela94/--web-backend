

import { Router } from "express";


import { config } from "dotenv";

import { AdminMiddleware } from "../middlewares/auth.middlewares.js";
import { uploadFiles } from "../middlewares/uploads.middlewares.js";
import { loginUser,registerUser } from "../controllers/auth.controllers.js";
import { uploadProyecto } from "../controllers/uploads.controllers.js";

config() //cargamos variables de entorno 




const router = Router()



//Carga de productos ADMIN

router.post('/admin/uploads', 
    AdminMiddleware, 
    uploadFiles.fields([
        { name: 'portada', maxCount: 1 },
        { name: 'imgprod', maxCount: 10 }
    ]), 
    uploadProyecto
);



// ---------------------------------
//       REGISTRO/LOGIN 
// ---------------------------------


router.post("/admin/register", registerUser)


router.post("/admin/login", loginUser)








export default router