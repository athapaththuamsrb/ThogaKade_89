const Order = require('../model/OrderSchema');

const saveOrder = (req,resp)=>{
    const order= new Order({
        customer:req.body.customer,
        items:req.body.items,
        total:req.body.total
    });
    order.save().then(response=>{
        resp.status(201).json({state:true, message:'saved..'});
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

module.exports={
    saveOrder
}