const keys = require('../config/keys')
// @ts-ignore
const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '5$ for 5 credits',
        source: req.body.id
      })
      req.user.credits += 5
      const user = await req.user.save()

      res.send(user)
    } catch (error) {
      console.log(error)
    }
  })
}
