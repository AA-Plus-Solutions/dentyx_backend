import Joi from "joi";

export default class Schemas {
  static reviewSchema = Joi.object({
    username: Joi.string().required(),
    location: Joi.object({
      city: Joi.string().required(),
      state: Joi.string().required(),
      country: Joi.string().required(),
    }).required(),
    creation_date: Joi.date().timestamp(),
    review_values: Joi.object({
      treatment_quality: Joi.number().min(1).max(5),
      communication: Joi.number().min(1).max(5),
      price: Joi.number().min(1).max(5),
      facilities: Joi.number().min(1).max(5),
      satisfaction: Joi.number().min(1).max(5),
      personnel_treatment: Joi.number().min(1).max(5),
      waiting_time: Joi.number().min(1).max(3),
      explanation: Joi.number().min(1).max(5),
      appointment: Joi.number().min(1).max(5),
    }).required(),
    review_comment: Joi.string().required().allow(""),
    review_recommendation: Joi.string().allow(""),
    updateAt: Joi.date().timestamp(),
    deleted: Joi.boolean(),
  });

  static deleteReviewSchema = Joi.object({
    username: Joi.string().required(),
  });
}
