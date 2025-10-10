const STORAGE_NAME = 'AppList'

export const setDataToLocal = (d) => {
  const app = JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];
  localStorage.setItem(STORAGE_NAME, JSON.stringify([...app, d]));

}
export const getDataToLocal = () => {
  const localData = JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];
  const idData = localData.map((data) => {
    return data.id;
  });
  return idData;
}

export const removeFromLocal = (id) => {
  const app = JSON.parse(localStorage.getItem(STORAGE_NAME));

  const newApp = app.filter(item => Number(item.id) !== id);
  console.log(newApp);

  localStorage.setItem(STORAGE_NAME, JSON.stringify(newApp));
}