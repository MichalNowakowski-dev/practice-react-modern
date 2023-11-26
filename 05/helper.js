const validate = (fields, values) => {
    const errorsList = [];
    fields.forEach(({ name, labelName, validation }) => {
        const value = values[name];
        if (validation.isRequired && value === '') {
            errorsList.push(`Pole ${labelName} jest wymagane!`);
        }

        if (validation.regexp) {
            if (validation.isRequired && !validation.regexp.test(value)) {
                errorsList.push(`Niepoprawny format pola ${labelName}!`);
            }
        }
    });

    return errorsList;
};

export default validate;
