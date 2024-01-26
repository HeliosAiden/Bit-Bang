import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

function App() {
    return (
        <div>
            Hello World from Bit bang!
        </div>
    )
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);