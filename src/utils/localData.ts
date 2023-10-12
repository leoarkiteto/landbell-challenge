export function saveStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getStorage(key: string): any {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}

export function clearStorage(key: string) {
  localStorage.setItem(key, "");
}
