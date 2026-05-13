const axios = require("axios");
const vars = require("../utils/variables");

async function getUserTest() {

    try {

        const response = await axios.get(`${vars.baseUrl}/users/${vars.userId}`);

        console.log("Status Code:", response.status);

        const user = response.data.data;

        console.log("First Name:", user.first_name);
        console.log("Email:", user.email);

        if (
            response.status === 200 &&
            user.first_name === "Janet" &&
            user.email === "janet.weaver@reqres.in"
        ) {
            console.log("Q4 Passed - User data verified");
        } else {
            console.log("Q4 Failed");
        }

    } catch (error) {
        console.log(error.response.data);
    }
}

getUserTest();