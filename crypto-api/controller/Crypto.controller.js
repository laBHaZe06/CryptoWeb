const express = require('express');
const { GetUserId } = require('../services/User.service');
const { getDefaultFavorites, getUserFavorites, getPrice, getPrices, tmpTest, getMarkets, setUserFavorites, setDefaultFavorites } = require('../services/Crypto.service');
const router = express.Router();

// routes
// favorites
router.post('/favorites', setDFavorites);
router.get('/favorites', getDFavorites);
router.post('/favorites/:id', setUFavorites);
router.get('/favorites/:id', getFavorites);
// prices
router.get('/price', getCryptoPrice);
router.get('/prices', getCryptoPrices);
// markets
router.get('/markets', getAllMarkets);
module.exports = router;

// functions
/// \brief Get the favorites of the user if he exists, the default favorites otherwise
/// \param req The request
/// \param res The response
/// \param next The next function
async function getFavorites(req, res, next)
{
    try
    {
        const userId = req.params.id;
        var result = await getUserFavorites(userId);
        res.status(200).json(result);
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

/// \brief Set the favorites of the user
/// \param req The request
/// \param res The response
/// \param next The next function
async function setUFavorites(req, res, next)
{
    try
    {
        const userId = req.params.id;
        const { favorites } = req.body;
        const result = await setUserFavorites(userId, favorites);
        res.status(200).json(result);
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

/// \brief Set the default favorites in the database and return them
/// \param req The request
/// \param res The response
/// \param next The next function
async function setDFavorites(req, res, next)
{
    try
    {
        // const userId = GetUserId(req.headers.authorization);
        const favorites = req.body.favorites;
        const result = await setDefaultFavorites(favorites);
        res.status(200).json(result);
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

/// \brief Get the default favorites in the database and return them
/// \param req The request
/// \param res The response
/// \param next The next function
async function getDFavorites(req, res, next)
{
    try
    {
        const result = await getDefaultFavorites();
        res.status(200).json(result);
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

/// \brief Get the price of a crypto
/// \param req The request
/// \param res The response
/// \param next The next function
async function getCryptoPrice(req, res, next)
{
    try
    {
        const { pair, exchange } = req.query;
        const price = await getPrice(pair, exchange);
        res.status(200).json(price);
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

/// \brief Get the prices of a list of cryptos
/// \param req The request
/// \param res The response
/// \param next The next function
async function getCryptoPrices(req, res, next)
{
    try
    {
        const pairs = req.query.pairs;
        const exchange = req.query.exchange;
        const prices = await getPrices(pairs, exchange);
        res.status(200).json(prices);
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

/// \brief Get the markets in the database and return them
/// \param req The request
/// \param res The response
/// \param next The next function
async function getAllMarkets(req, res, next)
{
    try
    {
        const result = await getMarkets();
        res.status(200).json(result);
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}