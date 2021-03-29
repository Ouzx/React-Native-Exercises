import { useState, useEffect } from 'react'; 
import yelp from '../api/yelp';
export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const SearchApi = async searchTerm => {
        console.log('Hi there');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'NYC'
                }
            });
            setResults(response.data.businesses);
            // setErrMsg('');
        }
        catch (err) {
            setErrMsg('Something went wrong');
        }
    };
    useEffect(() => {
        SearchApi('pasta');
    }, []);
    return [SearchApi, results, errMsg];
};