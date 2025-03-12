import {Router} from 'express';
import { getGuests } from '../controllers/guests.controller.js';

const router = Router();

router.get("/guests", getGuests);

export default router;