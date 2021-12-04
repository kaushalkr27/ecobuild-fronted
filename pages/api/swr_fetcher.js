const fetcher = async (baseUrl, endpoint, params = {}) => {
  const res = await fetch("http://localhost:7000/get-articles/california pollution").then((res) => {
    return res.json();
  });
  return res;
};

export default fetcher;
