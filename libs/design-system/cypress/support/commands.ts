/// <reference types="cypress" />
import { themeClass } from '@gubgoo-backoffice/design-system';
import { mount, MountOptions } from 'cypress/react18';
import React from 'react';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      login(email: string, password: string): void;
      mount: typeof mount;
    }
  }
}
const _mount = (
  jsx: React.ReactNode,
  options?: Partial<MountOptions> | undefined,
  rerenderKey?: string | undefined
) => {
  const _jsx = React.createElement('div', {
    className: themeClass,
    children: jsx,
  });
  return mount(_jsx, options, rerenderKey);
};
Cypress.Commands.add('mount', _mount);

//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
