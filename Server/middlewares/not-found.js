const notFound =  (req,res)=> res.status(404).send("Api route does not exist")

module.exports = notFound