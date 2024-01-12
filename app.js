const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
// eslint-disable-next-line no-console
  console.log('Health check request received')
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('7') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
