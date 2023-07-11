const dbName = 'fruitsDatabase';
const objectStoreName = 'fruits';

const request = indexedDB.open(dbName, 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  const objectStore = db.createObjectStore(objectStoreName, { keyPath: 'id', autoIncrement: true });
};

export function addFruit(fruit) {
  const transaction = request.result.transaction([objectStoreName], 'readwrite');
  const objectStore = transaction.objectStore(objectStoreName);
  const requestAdd = objectStore.add(fruit);
  return new Promise((resolve, reject) => {
    requestAdd.onsuccess = () => {
      resolve(requestAdd.result);
    };
    requestAdd.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

export function updateFruit(fruit) {
  const transaction = request.result.transaction([objectStoreName], 'readwrite');
  const objectStore = transaction.objectStore(objectStoreName);
  const requestUpdate = objectStore.put(fruit);
  return new Promise((resolve, reject) => {
    requestUpdate.onsuccess = () => {
      resolve(requestUpdate.result);
    };
    requestUpdate.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

export function deleteFruit(id) {
  const transaction = request.result.transaction([objectStoreName], 'readwrite');
  const objectStore = transaction.objectStore(objectStoreName);
  const requestDelete = objectStore.delete(id);
  return new Promise((resolve, reject) => {
    requestDelete.onsuccess = () => {
      resolve();
    };
    requestDelete.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

export function getAllFruits() {
  const transaction = request.result.transaction([objectStoreName], 'readonly');
  const objectStore = transaction.objectStore(objectStoreName);
  const requestGetAll = objectStore.getAll();
  return new Promise((resolve, reject) => {
    requestGetAll.onsuccess = () => {
      resolve(requestGetAll.result);
    };
    requestGetAll.onerror = (event) => {
      reject(event.target.error);
    };
  });
}
