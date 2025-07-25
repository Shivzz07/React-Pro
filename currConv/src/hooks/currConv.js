import {useState, useEffect, use} from 'react';

function useCurrConv(currency) {
    const [data, setData] = useState({});

   useEffect(() => {
   fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
   .then((res) => res.json())
   .then((res) => setData(res[currency]))
    },[currency]);
    return data;
}

export default useCurrConv;