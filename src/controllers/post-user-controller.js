module.exports = function makePostUser({
  makeCreateUserReq,
  createUser,
  makeCreateUserRes,
}) {
  return async function postUser(httpRequest) {
    try {
      const createUserReq = await makeCreateUserReq(httpRequest);
      const user = await createUser.createAndStoreUser(createUserReq);
      const createUserRes = makeCreateUserRes(user);

      return {
        headers: {
          "Content-Type": "application/json",
          "Last-Modified": new Date(createUserRes.modifiedOn).toUTCString(),
        },
        statusCode: 201,
        body: { createUserRes },
      };
    } catch (e) {
      console.dir(e);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};
