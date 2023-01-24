const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const soketIo = require('socket.io');
const http = require('http');
const cors = require('cors');
const authRoute = require('./routes/auth.router.js');
const storeRoute = require('./routes/store.router.js');
const categoryRoute = require('./routes/category.router.js'); 
const keyWordRoute = require('./routes/keyWord.router.js');
const productRoute = require('./routes/product.router.js');
const pakgeRoute = require('./routes/pakge.router.js');
const orderItemRoute = require('./routes/orderItem.router.js');
const orderRoute = require('./routes/order.router.js');
const locationRoute = require('./routes/location.router.js');
const paymentMethodRoute = require('./routes/paymentMethod.router.js');
const paymentRoute = require('./routes/payment.router.js');
const shippingMethodRoute = require('./routes/shippingMethod.router.js');
const shippingRoute = require('./routes/shipping.router.js');
const walletRoute = require('./routes/wallet.router.js');
const auctionRoute = require('./routes/auction.router.js');
const follwersRoute = require('./routes/follwers.router.js');
const stripeRoute = require('./routes/stripe.payment.router.js');
const roomRoute = require('./routes/room.router.js');
const messageRoute = require('./routes/message.router.js');


require('dotenv').config()



const app = express();

const corsOptions = {
    origin: ['*'],
    optionsSuccessStatus: 200 
  }

app.use(cors(corsOptions))

const serv =  http.createServer(app)

const io = soketIo(serv);


app.use(bodyParser.json());
app.use(express.json())


app.use(cookieParser())

app.use('/product_img',express.static('product_img'))

//availpe port


// app.use(function(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin','*')
//     res.setHeader('Access-Control-Allow-Headers',"Origin, X-Requested-With, Content-Type, Accept")
// })




// mongoos
const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('server connect with mongo');
    }catch(err){
        console.log(err);
    }
};

// route
app.use("/auth",authRoute);
app.use("/store",storeRoute);
app.use("/category",categoryRoute);
app.use("/key_word",keyWordRoute);
app.use("/product",productRoute);
app.use("/pakge",pakgeRoute);
app.use("/orderItem",orderItemRoute);
app.use("/order",orderRoute);
app.use("/location",locationRoute);
app.use("/paymentMethod",paymentMethodRoute);
app.use("/payment",paymentRoute);
app.use("/shippingMethod",shippingMethodRoute);
app.use("/shipping",shippingRoute);
app.use("/wallet",walletRoute);
app.use("/auction",auctionRoute);
app.use("/stripe",stripeRoute);
app.use("/follers",follwersRoute);
app.use("/room",roomRoute);
app.use("/message",messageRoute);


//error
app.use((err,req,res,next) =>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";
    return res.status(500).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})

//chanel 
io.on("connection",(clint) =>{
    console.log(clint.id);
    // clint.on('msg',(data)=>{
    //     console.log(data.name)

    //     clint.to(clint.id).emit('res',data)
    // })
})

io.on("connection",(clint)=>{
    //console.log(clint.id)

    clint.on('msge',(data)=>{
        //console.log(data.name)
        clint.emit('msge','hello '+data.name+' welcome ')
       // clint.to(clint.id).emit('res',data)
        console.log(data+"1")
        io.emit('res2',data)
        //console.log(io.emit('res',data))
        //console.log(data+"2")
    })
})



app.listen(process.env.port, () => {
    connect()
    console.log(`Server listening on the port  ${process.env.port}`);
})
serv.listen(process.env.socketPort, () => {
    console.log(`Server socket listening on the port  ${process.env.socketPort}`);
}) 

const io1 = require('./socket').init(app.listen(process.env.socketPort1))
    io1.on('connection', socket => {
      console.log('Client connected')

      // socket.on('hello', (data) => {
      //   console.log('hello connected') 
      // });
    })


// app.listen(process.env.port,process.env.hostName, () => {
//     connect()
//     console.log(`Server listening on the port  ${process.env.port}`);
// })
// serv.listen(process.env.socketPort,process.env.hostName, () => {
//     // connect()
//     console.log(`Server listening on the port  ${process.env.socketPort}`);
// })