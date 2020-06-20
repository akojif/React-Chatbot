import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

// all available props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#4f659e',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#4f659e',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const steps = [{
    id: '1',
    message: 'Hello World',
    end: true,
}, ];

const ThemedExample = () => ( 
<ThemeProvider theme = { theme }>
    
<ChatBot steps = { steps }
    />; 

</ThemeProvider>
);

export default ThemedExample;