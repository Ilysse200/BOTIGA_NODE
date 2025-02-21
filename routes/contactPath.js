import { CreateContact, getAllContact, getContactById, deleteContactById} from "../controllers/contactController.js";

import express from "express";
const contactRouter = express.Router();

contactRouter.post('/createContact',CreateContact);
contactRouter.get('/getAllContact', getAllContact);
contactRouter.get('/getContactById/:id', getContactById);
contactRouter.delete('/deleteContactById/:id', deleteContactById);
export default contactRouter;