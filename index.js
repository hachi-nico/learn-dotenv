// dotenv will run depending on node env
if (process.env.NODE_ENV) {
  require('dotenv').config({
    path: `${__dirname}/.env.${process.env.NODE_ENV}`,
  });
} else {
  require('dotenv').config();
}

// print dotenv variables
console.log(process.env.MY_VAR);
console.log(process.env.MY_NUM);

// print current dir and node env
console.log(`${__dirname}/.env.${process.env.NODE_ENV}`);
