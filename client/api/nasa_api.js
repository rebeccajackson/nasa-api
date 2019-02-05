import request from 'superagent'

const apiEndPoint = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

export default function getAPOD() {
  return request.get(apiEndPoint)
  .then(res => {
    console.log(res.body)
    return res.body
  })
  .catch(() => {
    throw Error('You need to implement an API route for /nasa/apod')
  })
}