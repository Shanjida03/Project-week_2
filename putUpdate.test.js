const axios = require("axios");
const vars = require("../utils/variables");

async function putUpdateTest() {

    try {

        const response = await axios.put(`${vars.baseUrl}/users/2`, {
            name: "John",
            job: "QA Engineer"
        });

        console.log("Status Code:", response.status);

        console.log("Updated Name:", response.data.name);
        console.log("Updated Job:", response.data.job);
        console.log("Updated At:", response.data.updatedAt);

        if (
            response.status === 200 &&
            response.data.updatedAt
        ) {
            console.log("Q5 Passed - PUT update verified");
        } else {
            console.log("Q5 Failed");
        }

    } catch (error) {
        console.log(error.response.data);
    }
}

putUpdateTest();