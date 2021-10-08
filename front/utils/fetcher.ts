import axios from 'axios';

const fetcher = (url:string) => axios.get(url,{
    withCredentials : true,
}).then((reponse) => reponse.data);

export default fetcher;