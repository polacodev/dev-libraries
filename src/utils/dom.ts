export const $ = (selector: string, context = document) => context.querySelector(selector);
export const $$ = (selector: string, context = document) => context.querySelectorAll(selector);
