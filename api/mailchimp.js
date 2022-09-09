import fetch from 'node-fetch';

export default function handler(req, res){
    const MAILCHIMP_API_KEY = '38c5a30298b573dd67a6d66e36a807bf-us14';
    const DC = 'us14';
    console.log("salve da função nuvem");

    console.log(JSON.parse(req.body));

    try{

        res.json({message: 'success'});
    }catch(error){
            console.log("error", error.message);
            res.status(400).send({message: "error"});
    }
}