const fetch = require("node-fetch");

const API_ENDPOINT = "https://icanhazdadjoke.com/";
// 
 exports.handler = async (event, context) => {
   return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
     .then((response) => response.json())
     .then((data) => ({
       statusCode: 200,
       body: data.joke,
     }))
     .catch((error) => ({ statusCode: 422, body: String(error) }));
 };
 

// let handler = async ( event, context ) => {
//         return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
//           .then((response) => response.json())
//           .then((data) => ({
//             statusCode: 200,
//             body: data.joke,
//           } ) ).finally( () => {
//             console.log()
//           } )
//     .catch( ( error ) => ( { statusCode: 422, body: String( error ) } ) )
// 
//       };
// 
//     console.log( handler( API_ENDPOINT, {
//       headers: {
//         Accept: "application/json"
//       }
//     } ) );
