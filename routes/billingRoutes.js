const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = '../middlewares/requireLogin'

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    try {
      requireLogin
      /*  we no longer need this check because we have the middleware requireLogin to check this */
      // if (!req.user) {
      //   return res.status(401).send({ error: 'You must log in!' })
      // }
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
