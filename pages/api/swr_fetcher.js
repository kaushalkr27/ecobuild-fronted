const fetcher = async (baseUrl, endpoint, params = {}) => {
  const res = await fetch("http://ecobuild-env.eba-p5qfhucf.us-east-1.elasticbeanstalk.com/get-articles/california pollution").then((res) => {
    return res.json();
  });
  return res;
};

export default fetcher;
