const axios = require("axios");
const Table = require("tty-table");
const { config, options } = require("./config");
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

module.exports = function () {
  prompt([
      {
        type: "list",
        name: "choice",
        message: "Select states whom id >=",
        choices: [
          {
            name: "All state",
            value: "ALL"
          },
          {
            name: "20+",
            value: "20"
          },
          {
            name: "30+",
            value: "30"
          }
        ]
      }
    ])
    .then((answers) => {
      console.log(`You selected: ${answers.choice}`);

      axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states', config)
        .then(function (response) {
          let states = response.data.states;

          if (answers.choice === "20") {
            states = states.filter(state => state.state_id >= 20);
          } else if (answers.choice === "30") {
            states = states.filter(state => state.state_id >= 30);
          }

          let header = [
            {
              value: "state_id",
              headerColor: "cyan",
              color: "red",
              align: "left",
              alias: "State Id",
              width: 20
            },
            {
              value: "state_name",
              alias: "State Name",
              color: "blue",
              width: 40,
            }
          ];

          const out = Table(header, states, options).render();
          console.log(out);

        })
        .catch(function (error) {
          console.log(error);
        });

    })
    .catch((error) => {
      if (error.isTtyError) {
      } else {
        console.log("Something else went wrong: ", error);
      }
    });
}
