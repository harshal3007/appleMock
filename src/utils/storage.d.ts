export function storage<T = unknown>(key: string, value?: T): T | undefined;
export function getItem<T = unknown>(key: string): T | undefined;
export function setItem<T = unknown>(key: string, value: T): void;

