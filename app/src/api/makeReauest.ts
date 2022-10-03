export default async (url: string) => {
  const response: Response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  }
  return response.text().then((text) => {
    throw new Error(text);
  });
};
