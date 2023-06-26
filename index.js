//https://www.twilio.com/pt-br/blog/5-formas-de-fazer-chamadas-http-em-node-js-usando-async-await
// https://jsonplaceholder.typicode.com/

const axios = require('axios');
var titulo = "";
(async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data);
        titulo = response.data;

        // console.log(response.data.explanation);
    } catch (error) {
        console.log("Deu erro Get: ", error.rsponse);
    }
    console.log("Valor título Get:", titulo[0]);
    console.log("*** Iniciandoi o POST ***");

    try {
        const  response  = await axios.post('https://httpbin.org/post', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        });

        //console.log(response.data);
        titulo = response.statusText;

        // console.log(response.data.explanation);
    } catch (error) {
        console.log("Deu erro Post: ", error.response);
    }
    console.log("Valor título Post:", titulo);
})();