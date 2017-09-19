interface IEmailService {
  send(mail: any): Promise<any>;
}

interface IEmailServiceOptions {}

export { IEmailService, IEmailServiceOptions };
