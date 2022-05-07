import { MailAdapter } from "../adapters/MailAdapter";
import { FeedbackRepository } from "../repositories/FeedbackRepository";

interface SubmitFeedbackRequest {
  type: string,
  comment: string,
  screenshot?: string
}
export class SubmitFeedback {

  constructor(
    private feedbackRepository: FeedbackRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Invalid type or empty')
    }

    if (!comment) {
      throw new Error('Invalid comment or empty')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style='font-family: sans-serif; font-size: 16px'>`,
        `<strong>Tipo de feedback:</strong> ${type}<br>`,
        `<strong>Comentário:</strong> ${comment}<br>`,
        screenshot ? `<a href="${screenshot}" target="_blank"><img src='${screenshot}' style='width:100%;max-width:500px;'></a>` : null,
        `</div>`
      ].join('\n')
    })
  }
}