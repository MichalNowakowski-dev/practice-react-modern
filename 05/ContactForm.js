import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import validate from './helper';

const ContactForm = (props) => {
    const { inputsFields } = props;
    const createInit = () => {
        const init = {};
        inputsFields.forEach((field) => {
            init[field.name] = '';
        });
        return init;
    };
    const [state, dispatch] = useReducer(reducer, createInit());
    const [errors, setErrors] = useState([]);

    const renderInputs = () => {
        const labelDisplayStyle = { display: 'flex', flexDirection: 'column' };
        return inputsFields.map(({ type, name, labelName, isRequired }) => {
            if (type === 'textarea') {
                return (
                    <label
                        style={labelDisplayStyle}
                        htmlFor={name}
                        key={name}
                    >
                        {isRequired ? `${labelName}*` : labelName}
                        <textarea
                            value={state[name]}
                            onChange={(e) => dispatch({ input: e.target, type: 'change' })}
                            name={name}
                            id={name}
                            type={type}
                        />
                    </label>
                );
            }
            return (
                <label
                    style={labelDisplayStyle}
                    key={name}
                    htmlFor={name}
                >
                    {isRequired ? `${labelName}*` : labelName}
                    <input
                        value={state[name]}
                        onChange={(e) => dispatch({ input: e.target, type: 'change' })}
                        name={name}
                        id={name}
                        type={type}
                    />
                </label>
            );
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsList = validate(inputsFields, state);
        if (errorsList.length > 0) {
            setErrors(errorsList);
        } else {
            dispatch({ type: 'clear', init: createInit() });
            setErrors([]);
            // eslint-disable-next-line no-alert
            window.alert('Dane wysłane pomyślnie.');
        }
    };

    const renderErrors = () =>
        errors &&
        errors.map((error) => (
            <p
                style={{ color: 'red' }}
                key={error}
            >
                {error}
            </p>
        ));

    return (
        <>
            <form
                style={{ width: '50vw' }}
                noValidate
                onSubmit={handleSubmit}
            >
                {renderInputs()}
                <input
                    type="submit"
                    value="Wyślij"
                />
            </form>
            {renderErrors()}
        </>
    );
};

ContactForm.propTypes = {
    inputsFields: PropTypes.instanceOf(Array).isRequired,
};

export default ContactForm;
