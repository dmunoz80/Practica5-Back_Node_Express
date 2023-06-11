const superMiddleware = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    console.log(`Hoy ${new Date()} 
        se ha recibido una consulta en la ruta ${url} con el metodo ${method}`);
    if (Object.keys(req.query).length > 0) console.log('req.query: ', JSON.stringify(req.query, null, 2));
    next();
};

module.exports = {
    superMiddleware
}