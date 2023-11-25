/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import useRandomItem from './hook';

const SpeedTest = () => {
    const [word, regenerateWord] = useRandomItem(['devmentor.pl', 'abc', 'JavaScript']);
    const [query, setQuery] = useState('');
    const [time, setTime] = useState(0);
    const [lettersCount, setLettersCount] = useState(0);
    const intervalId = useRef(0);

    useEffect(() => {
        regenerateWord();
    }, []);
    useEffect(() => {
        if (query === word) {
            regenerateWord();
            setQuery('');
        }

        if (query.length)
            if (word && word.includes(query) && query !== '') {
                setLettersCount((prevState) => {
                    return prevState + 1;
                });
            }
    }, [query]);

    const startTimer = () => {
        intervalId.current = setInterval(() => {
            setTime((prevState) => {
                return prevState + 1;
            });
        }, 1000);
    };
    return (
        <div>
            <h1>
                Phrase to type: <span style={{ color: 'red' }}>{word}</span>
            </h1>
            <h2>Time: {time}</h2>
            <h2>Correct letters count: {lettersCount}</h2>
            <input
                value={query}
                onFocus={startTimer}
                onBlur={() => {
                    clearInterval(intervalId.current);
                }}
                onChange={(e) => {
                    const { value } = e.target;
                    setQuery(value);
                }}
            />
        </div>
    );
};

export default SpeedTest;
