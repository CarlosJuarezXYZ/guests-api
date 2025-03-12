import {Router} from 'express';
import { getGuests,createGuests, updateGuests, deleteGuests } from '../controllers/guests.controller.js';

const router = Router();

router.get("/guests", getGuests);

router.post("/guests", createGuests);

router.patch("/guests/:id",updateGuests);

router.delete("/guests/:id",deleteGuests);

export default router;
