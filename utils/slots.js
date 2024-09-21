const axios = require("axios");
const Table = require("tty-table");
const { config, options } = require("./config")

module.exports = function () {
    var date = new Date();
    var todaysDate = `${date.getDate()}-${String(
        date.getMonth() + 1
    ).padStart(2, "0")}-${date.getFullYear()}`;

    axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=140&date=06-05-2021`, config)
        .then(function (response) {
            let header = [{
                value: "name",
                headerColor: "cyan",
                color: "red",
                align: "left",
                alias: "Center Name",
                width: 20
            },
            {
                value: "address",
                alias: "Center Address",
                color: "blue",
                width: 40,
            }]

            // const out = Table(header, response.data.centers, options).render()
            // console.log(out);
            console.log(response.data);

        })
        .catch(function (error) {
            console.log(error);
        })

}