import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { TCard } from './card.interface';
import { Card } from './card.model';
import { CardSearchableFields } from './card.constant';

const createIntoDB = async (card: TCard) => {
  const result = await Card.create(card);
  if (!result) {
    throw new AppError(httpStatus.CONFLICT, "This card is not save, Try again!")
  }
  return result;
};

const getAllIntoDB = async (query: Record<string, unknown>) => {
  const cardQuery = new QueryBuilder(Card.find(), query)
    .search(CardSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await cardQuery.modelQuery;
  const meta = await cardQuery.countTotal();
  return {
    meta,
    result,
  };
};

const getAIntoDB = async (title: string) => {
  const result = await Card.findOne({ title: title });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "This card is not found!")
  }

  return result;
};

export const CardServices = {
  createIntoDB,
  getAllIntoDB,
  getAIntoDB,
};
