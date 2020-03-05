const validators = {
  required: value => Boolean(value && String(value).trim()),
  email: value =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi.test(
      value,
    ),
};

export const validate = rules => values => {
  const errors = {};

  for (const fieldName in rules) {
    const rule = rules[fieldName];
    for (const validatorName in rule) {
      const validator = validators[validatorName];
      if (typeof validator === 'function' && !validator(values[fieldName])) {
        errors[fieldName] = rule[validatorName];
      }
    }
  }
  return errors;
};
