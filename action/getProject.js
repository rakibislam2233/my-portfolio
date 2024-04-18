export const getProject = async () => {
  const res = await fetch(`https://myportfolio-gamma-lac.vercel.app/api/v1/projects`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const datas = await res.json();
  return datas?.data;
};
