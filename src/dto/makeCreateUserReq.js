const buildMakeCreateUserReq = function ({ validator, makeId }) {
  return function makeCreateUserReq(req) {
    const { body } = req;
    let cur = {};

    if (!body) {
      throw new Error("bad request");
    }

    if (body.name && validator.isLength(body.name, { min: 3 })) {
      cur.name = validator.escape(validator.trim(body.name));
    } else {
      throw new Error("bad request");
    }

    if (body.email && validator.isEmail(body.email)) {
      cur.email = validator.normalizeEmail(body.email);
    } else {
      throw new Error("bad request");
    }

    cur.id = makeId();

    return cur;
  };
};

module.exports = buildMakeCreateUserReq;
