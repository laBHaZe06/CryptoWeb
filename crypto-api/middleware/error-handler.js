module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    switch (true) {
        case typeof err === 'string':
            // erreur d'application personnalisée
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ message: err });
        default:
            return res.status(500).json({ message: err.message });
    }
}