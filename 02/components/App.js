// ./src/components/App.js
import React from 'react';
import Box from './Box';
import { TitleContext } from '../context';

class App extends React.Component {
    state = {
        text: 'React HelloWorld !',
    };

    render() {
        const { text } = this.state;

        return (
            <TitleContext.Provider value={text}>
                <Box />
            </TitleContext.Provider>
        );
    }
}

export default App;
