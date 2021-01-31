const fetch = require("node-fetch");

exports.handler = async (event) => {
  let pageNumber = JSON.parse(event.body)['page'] ? JSON.parse(event.body)['page'] : 1;
  console.log(pageNumber);
  const response = await fetch(
    `https://api.discogs.com/users/jacobjavits/collection/folders/0/releases?sort=artist&page=${pageNumber}&token=${process.env.DISCOGS_API}`
  )
    .then((response) => response.json())
    .then((data) => {
      this.data = data;
    })
    .catch((error) => console.log("error", error));

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(this.data),
  };
};
