import http from '../api_call';

export const getActu = () => {
    return http.get('/rss/actu');
}

export const getNFT = () => {
    return http.get('/rss/nft');
}

export const getBTC = () => {
    return http.get('/rss/btc');
}

export const getETH = () => {
    return http.get('/rss/eth');
}