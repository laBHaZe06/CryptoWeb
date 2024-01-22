module.exports = validateRequest;

function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // inclus tous les erreurs
        allowUnknown: true, // ignore les propriétés inconnues
        stripUnknown: true // suprime les propriétés inconnues
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}