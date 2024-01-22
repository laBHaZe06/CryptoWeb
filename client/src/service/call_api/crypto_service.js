import http from '../api_call';

export const getCryptoFav = () => {
    return http.get('/crypto/favorites');
}

export const getCrypto = () => {
    return http.get('/crypto/favorites');
}
export const getMarkets = () => {
    return http.get('/crypto/markets');
}
export const getCryptoById = (id) => {
    return http.get(`/crypto/${id}`);
}


export const addCrypto = (cryptoList) => {
    return http.post('/crypto/favorites', {
        favorites: cryptoList,
      });
}

export const addCryptoById = (cryptoList,id) => {
    return http.post('/crypto/favorites/'+id, {
        favorites: cryptoList,
      });
}
