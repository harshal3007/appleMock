
export function storage(key, value) {
  if (value !== undefined) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return undefined;
    } catch (e) {
      console.warn('storage set failed', e);
      return undefined;
    }
  }
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return undefined;
    return JSON.parse(raw);
  } catch (e) {
    console.warn('storage get failed', e);
    return undefined;
  }
}

export function getItem(key) {
  return storage(key);
}

export function setItem(key, value) {
  storage(key, value);
}
