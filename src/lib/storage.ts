let storageLibrary: any;

export enum StorageKeys {
  Cards = '@zurich:cards',
}

export const initStorage = (storage: any) => {
  if (storageLibrary) {
    return storageLibrary;
  }
  storageLibrary = storage;

  return storageLibrary;
};

const getStorageClient = () => {
  if (!storageLibrary) {
    console.error('Storage library was not initialized');
    throw Error('Storage library was not initialized');
  }
  return storageLibrary;
};

export const getKeyValue = async (key: StorageKeys) => {
  const storageClient = getStorageClient();
  try {
    const value = await storageClient.getItem(key);
    return value && JSON.parse(value);
  } catch (e) {
    return null;
  }
};

export const setKeyValue = async (value: any, key: StorageKeys) => {
  const storageClient = getStorageClient();
  try {
    await storageClient.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
};

