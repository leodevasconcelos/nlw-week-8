import express from 'express';
import nodemailer from 'nodemailer';
import { NodeMailerAdapter } from './adapters/nodemailer/NodeMailerAdapter';
import { PrismaFeedbackRepository } from './repositories/Prisma/PrismaFeedbackRepository';
import { SubmitFeedback } from './services/SubmitFeedback';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodeMailerAdapter = new NodeMailerAdapter();
  const submitFeedback = new SubmitFeedback(
    prismaFeedbackRepository,
    nodeMailerAdapter
  );

  await submitFeedback.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send();
});