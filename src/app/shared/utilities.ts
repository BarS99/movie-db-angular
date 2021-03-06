export function timestampToString(timestamp: number): string {
  const date = new Date(timestamp)

  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

export function timestampToIso(timestamp: number): string {
  return new Date(timestamp).toISOString();
}


export function dateToIso(date: string): string {
    return new Date(date).toISOString();
}

export function getLocalStorage(key: string): any[] {
    const favoriteStorage: null|string = localStorage.getItem('favorite');
    let favoriteArray: number[] = [];

    if (favoriteStorage !== null) {
      favoriteArray = JSON.parse(favoriteStorage);
    }

    return favoriteArray;
}