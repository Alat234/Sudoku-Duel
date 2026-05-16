export function qs<T extends HTMLElement>(selector: string, parent: Document | HTMLElement = document): T {
  const element = parent.querySelector<T>(selector);

  if (!element) {
    throw new Error(`Element not found: ${selector}`);
  }

  return element;
}

export function qsa<T extends HTMLElement>(selector: string, parent: Document | HTMLElement = document): T[] {
  return Array.from(parent.querySelectorAll<T>(selector));
}
