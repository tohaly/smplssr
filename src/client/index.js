import React from "react";
import { hydrateRoot } from 'react-dom/client';
import {App} from "./app";


const rootElement = document.getElementById('root')

hydrateRoot(
    rootElement,
    <App />,
    {
        onRecoverableError: () => {
            console.error('Recoverable error');
        }
    }
);
