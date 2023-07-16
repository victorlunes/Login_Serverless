const create = async (event) => {
  const { body } = event;

  const payload = JSON.parse(body);

  return {
    statusCode: 200,
    body: JSON.stringify(payload),
  };
};

module.exports = {
  create,
};
