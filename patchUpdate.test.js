const axios = require("axios");
const vars = require("../utils/variables");

async function patchTest() {

    try {

        const response = await axios.patch(`${vars.baseUrl}/users/2`, {
            job: "Senior QA"
        });

        console.log("Status Code:", response.status);

        console.log("Updated Job:", response.data.job);
        console.log("Updated At:", response.data.updatedAt);

        if (
            response.status === 200 &&
            response.data.job === "Senior QA"
        ) {
            console.log("Q6 Passed - PATCH verified");
        } else {
            console.log("Q6 Failed");
        }

    } catch (error) {
        console.log(error.response.data);
    }
}

patchTest();