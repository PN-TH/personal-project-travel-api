const { findMany, findOne } = require('../models/article.js');

module.exports.getCollection = async (req, res) => {
  const rawData = await findMany();
  res.send(
    rawData.map((c) => ({
      id: c.id,
      name: c.name,
      price: c.price,
      picture: c.picture,
      autonomy: c.autonomy,
      position: c.position,
      deploy: c.deploy,
      banner: c.banner,
      youtube_url: c.youtube_url,
      description_title: c.description_title,
      descirption: c.descirption,
    }))
  );
};

module.exports.findOne = async (req, res) => {
  res.send(await findOne(req.params.id));
};
