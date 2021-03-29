import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer GEBEq87VV0I4X5Jh0ZbPN_HcRPxdjDZ9Xbm1h1l6eKybuGYQMvtVDMwRxIDk3yKGJdHWmTNkVZ-yt1FQTUXPjGqGfvNDH5N3s128BmjQ0qD_1A7rN7ud06MNfdBgYHYx'
    }
});