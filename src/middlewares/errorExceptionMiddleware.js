module.exports = function (err, req, res, next) {
  if (err.status) {
    res.status(err.status).send({
      code: err.status,
      message: err.message
    })
  } else {
    res.status(500).send({
      code: 500,
      message: 'somthing went wrong on server.'
    })
  }
  console.log(err)
}
