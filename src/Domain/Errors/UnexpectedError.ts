export class UnexpectedError extends Error {
  constructor() {
    super('Something went wrong');
    this.name = 'UnexpectedError';
  }
}
