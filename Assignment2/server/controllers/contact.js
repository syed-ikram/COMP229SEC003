let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let Contact = require('../model/contact');
module.exports.displayContactList = (req,res,next)=>{
    Contact.find((err,contactList)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         console.log(contactList);
         contactList.sort((p1, p2) => (p1.name > p2.name) ? 1 : (p1.name< p2.name) ? -1 : 0);
         res.render('contact/list', 
         {title:'Contacts', ContactList:contactList,
        displayName:req.user ? req.user.displayName:''});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('contact/add',{title:'Add Contact',
    displayName:req.user ? req.user.displayName:''})

}

module.exports.processAddPage = (req,res,next)=>{
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
    Contact.create(newContact,(err,Contact)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/contactList');
        }
    });
}
    
module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Contact.findById(id,(err,ContactToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('contact/edit',{title:'Edit Contact', contact: ContactToEdit,
            displayName:req.user ? req.user.displayName:''});
        }
    
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id
    console.log(req.body);
    let updatedContact = Contact({
        "_id":id,
        "name":req.body.name,
        "number":req.body.number,
        "email":req.body.email,
    });
    Contact.updateOne({_id:id}, updatedContact,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contactList');
        }
    });
}

module.exports.performDelete= (req,res,next)=>{
    let id = req.params.id;
    Contact.remove({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contactList');
        }
        
    });
}