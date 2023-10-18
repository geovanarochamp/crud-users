const CPFValidator = {
  blackList: [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '12345678909',
  ],

  stripRegex: /[^\d]/g,

  _verifierDigit(cpf: string): number {
    const numbers = cpf.split('').map((number) => parseInt(number, 10));

    const modulus = numbers.length + 1;

    const multiplied = numbers.map(
      (number, index) => number * (modulus - index),
    );

    const mod = multiplied.reduce((buffer, number) => buffer + number) % 11;

    return mod < 2 ? 0 : 11 - mod;
  },

  format(cpf: string): string {
    const regExp = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;

    return this.strip(cpf).replace(
      regExp,
      (_, p1, p2, p3, p4) => `${p1}.${p2}.${p3}-${p4}`,
    );
  },

  strip(cpf?: string): string {
    return (cpf || '').replace(this.stripRegex, '');
  },

  isValid(cpf?: string, stripBeforeValidation = true): boolean {
    if (stripBeforeValidation) {
      cpf = this.strip(cpf);
    }

    if (!cpf || cpf.length !== 11) {
      return false;
    }

    if (this.blackList.includes(cpf)) {
      return false;
    }

    let numbers = cpf.substring(0, 9);
    numbers += this._verifierDigit(numbers).toString();
    numbers += this._verifierDigit(numbers).toString();

    return (
      numbers.substring(numbers.length - 2) === cpf.substring(cpf.length - 2)
    );
  },

  generate(useFormat = false): string {
    let numbers = '';

    for (let i = 0; i < 9; i += 1) {
      numbers += Math.floor(Math.random() * 9).toString();
    }

    numbers += this._verifierDigit(numbers).toString();
    numbers += this._verifierDigit(numbers).toString();

    return useFormat ? this.format(numbers) : numbers;
  },
};

export default CPFValidator;
