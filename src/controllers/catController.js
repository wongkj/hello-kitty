const _ = require('lodash')
const axios = require('axios')
const { checkType } = require('../common/utils')

exports.getCats = async (req, res, next) => {

  if (!req.query.type) {
    return res.status(400).json({
      status: 'Bad Request',
      message: `Query String Parameter 'type' must be provided.`
    })
  }

  const type = req.query.type;

  if (!checkType(type)) {
    return res.status(400).json({
      status: 'Bad Request',
      message: `Query String Parameter 'type' must be either 'child_friendly', 'dog_friendly', or 'stranger_friendly'.`
    })    
  }   

  try { 
    const limit = req.query.limit ?? 5
    const { data: cats } = await axios.get('https://api.thecatapi.com/v1/breeds')
    const orderedCats = _.orderBy(cats, [type], ['desc']).slice(0, limit)
    return res.status(200).json({
      status: 'success',
      type,
      qty: orderedCats.length,
      data: orderedCats,
    })
  } catch (error) {
    return res.status(500).json({
      status: "Server Error",
    });
  }
};
