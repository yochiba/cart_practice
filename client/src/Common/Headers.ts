import Util from './Util';

namespace Headers {
  // POST
  export const axiosPost = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': Util.hostUrl,
  }
}


export default Headers;