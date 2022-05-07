import { SubmitFeedback } from "./SubmitFeedback"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedback(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {

  it('should be able to submit feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Algo pra testar',
      screenshot: 'data:image/png;base64,as5g4edb48dbwsbrbnrk'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();

  });

  it('should not be able to submit a feedback without a type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Algo pra testar',
      screenshot: 'data:image/png;base64,as5g4edb48dbwsbrbnrk'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,as5g4edb48dbwsbrbnrk'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Algo pra testar',
      screenshot: 'test.jpg'
    })).rejects.toThrow();
  });
});