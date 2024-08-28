import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CardServices } from "./card.service";

const addACard = catchAsync(async (req, res) => {
    const card = await CardServices.createIntoDB(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New card added successfully!',
      data: card,
    });
  });

  const getAllCards = catchAsync(async (req, res) => {
    const result = await CardServices.getAllIntoDB(req.query);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All cards retrieve successfully!',
      meta: result.meta,
      data: result.result,
    });
  });

  const getACard = catchAsync(async (req, res) => {
    const { title } = req.params;
    const card = await CardServices.getAIntoDB(title);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Card retrieve successfully!',
      data: card,
    });
  });

  export const cardControllers = {
    addACard,
    getAllCards,
    getACard
  };