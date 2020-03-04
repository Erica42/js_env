export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://mysterious-dawn-16770.herokuapp.com/';
  }
