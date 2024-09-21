const axios = require("axios");
const Table = require("tty-table");
const {config, options} = require("./config")

module.exports = function (stateid) {
    axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`, config)
        .then(function (response) {
            let header = [{
                value: "district_id",
                headerColor: "cyan",
                color: "red",
                align: "left",
                alias:"District Id",
                width: 20
              },
              {
                value: "district_name",
                alias:"District Name",
                color: "blue",
                width: 40,
              }]

            const out = Table(header,response.data.districts,options).render()
            console.log(out);

        })
        .catch(function (error) {
            console.log(error);
        })
       
}