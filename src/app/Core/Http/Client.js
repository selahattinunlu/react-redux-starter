import { create } from 'apisauce'
import env from './../../../env';

const HttpClient = create(env.httpClient);

export default HttpClient;
