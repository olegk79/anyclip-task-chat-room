
const express = require('express');
const os = require('os');
const bodyParser = require("body-parser");

// require routes
const routes = require("./routes/index");


const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(routes);



// const MySqlAdapter = require("./adapters/mySqlAdapter");
// const testDb = async () => {

// //adapter.init();
// //await adapter.init();
// //await adapter.testConnection();
// //await adapter.testAddData();
// try {
//     const adapter = new MySqlAdapter();
//     //await adapter.postMessage(3,"hffhdsfhsdfjsdfhsdjfhs");
//     const res= await adapter.getLastMessages(10);

//     const res2 = res.map(m=>{
//         let message = {
//             message_id: m.message_id,
//             text: m.text,
//             timestamp: m.timestamp,
//             user: {
//                 id: m.user_id,
//                 name: m.User.user_name
//             }
//         };
//         return message;
//     });

//    // await adapter.testAddData(4, "te2121221xt aaa");
//     // await adapter.testAddData(3, "adafasffdsfsd ");
//     // await adapter.testAddData(1, "sdafhskdjfhf skdhfskdfhsdkfjh");
//     // await adapter.testAddData(2, "dasdasdasjldjasldjaff as ");
//     // await adapter.testAddData(4, "vnvnvnvvjd");
//     // await adapter.testAddData(3, "text dasfsdf");
//     // await adapter.testAddData(1, "text sjdjdfhf");
//     // await adapter.testAddData(3, "text sasasaj");

//     // const res = await adapter.getOrCreateUser('oleg4');
//    console.log(res2);
// }
// catch(e) {
//     console.log(e);
// }

// };

// testDb().then(()=>{

// });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

