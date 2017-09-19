interface IEmailService {
  send(mail: any): Promise<any>;
}

interface IEmailServiceOptions {}

class EmailService implements IEmailService {
  public static getInstance(options: IEmailServiceOptions) {
    if (EmailService.instance) {
      return EmailService.instance;
    } else {
      EmailService.instance = new EmailService(options);
      return EmailService.instance;
    }
  }
  private static instance: EmailService;
  private constructor(options: IEmailServiceOptions) {}

  public async send(mail: any): Promise<any> {
    // ...
  }
}

export { EmailService, IEmailService, IEmailServiceOptions };
