import React from 'react';
import { createRoot } from 'react-dom/client';

import ContactForm from './ContactForm';

const App = () => {
    const inputsFields = [
        {
            type: 'text',
            labelName: 'Imię i nazwisko',
            name: 'name',
            validation: { isRequired: true },
        },
        {
            type: 'email',
            labelName: 'Email',
            name: 'email',
            validation: { isRequired: true, regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        },
        {
            type: 'text',
            labelName: 'Numer telefonu',
            name: 'phoneNumber',
            validation: { isRequired: false },
        },
        { type: 'text', labelName: 'Tytuł', name: 'title', validation: { isRequired: true } },
        {
            type: 'textarea',
            labelName: 'Wiadomość',
            name: 'message',
            validation: { isRequired: true },
        },
    ];
    return <ContactForm inputsFields={inputsFields} />;
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
