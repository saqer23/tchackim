const express = require("express"); 
require("dotenv").config(); 
 
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post("/api/create-checkout-session", async (req, res) => { 
    const  product  = req.body;
    console.log(req.body,"body")
    console.log(product,"body")
    const session = await stripe.checkout.sessions.create({ 
      payment_method_types: ["card"], 
      line_items: [ 
        { 
          price_data: { 
            currency: "inr", 
            product_data: { 
              name: product.name, 
            }, 
            unit_amount: product.price * 100, 
          }, 
          quantity: product.quantity, 
        }, 
      ], 
      mode: "payment", 
      success_url: "http://localhost:3000/success", 
      cancel_url: "http://localhost:3000/cancel", 
    }); 
    res.json({ id: session.id }); 
  });


module.exports = router;
