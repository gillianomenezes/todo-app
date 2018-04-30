module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methos', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Allow-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}