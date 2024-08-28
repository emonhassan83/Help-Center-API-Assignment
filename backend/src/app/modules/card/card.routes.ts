import express from 'express';
import zodValidationRequest from '../../middleware/validateRequest';
import { cardValidations } from './card.validation';
import { cardControllers } from './card.controller';

const router = express.Router();

router.post(
  '/',
  zodValidationRequest(
    cardValidations.createCardValidationSchema,
  ),
  cardControllers.addACard,
);

router.get(
  '/',
  cardControllers.getAllCards,
);

router.get(
  '/:title',
  cardControllers.getACard,
);

export const CardsRoutes = router;
