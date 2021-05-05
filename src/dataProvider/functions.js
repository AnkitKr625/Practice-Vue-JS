const axios = require('axios');

export function fetchUsers(){
  var config = {
    method: 'get',
    url: 'https://randomuser.me/api/?results=10',
    headers: { 
      //'Cookie': '__cfduid=d2bb2d8a586e94996be3fc947158f622d1620119530'
    }
  };
  
  return axios(config);
}

