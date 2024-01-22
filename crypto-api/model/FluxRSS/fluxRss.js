const Parser = require('rss-parser');
//initialisation du parserœ
let parser = new Parser({
    headers: { 
        'User-Agent': 'Chrome',

    }
});

//function pour récupérer les flux rss
async function fetchRssBtc(feedUrl) {
    let feed = await parser.parseURL(feedUrl);
    return feed.items.map(item => {
        return {
            title: item.title,
            link: item.link,
            date: item.pubDate,
            description: item.description
        }
    });
}

async function fetchRssEth(feedUrl) {
    let feed = await parser.parseURL(feedUrl);
    return feed.items.map(item => {
        return {
            title: item.title,
            link: item.link,
            date: item.pubDate,
            description: item.description
        }
    });
}

async function fetchRssActu(feedUrl) {
    let feed = await parser.parseURL(feedUrl);
    return feed.items.map(item => {
        return {
            title: item.title,
            link: item.link,
            date: item.pubDate,
            description: item.description
        }
    });
}

async function fetchRssNft(feedUrl) {
    let feed = await parser.parseURL(feedUrl);
    return feed.items.map(item => {
        return {
            title: item.title,
            link: item.link,
            date: item.pubDate,
            description: item.description
        }
    });
}


module.exports = {
    fetchRssBtc,
    fetchRssEth,
    fetchRssActu,
    fetchRssNft
}

