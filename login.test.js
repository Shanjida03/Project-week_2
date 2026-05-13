const axios = require("axios");
const vars = require("../utils/variables");

async function loginTest() {
    try {
        const response = await axios.post(`${vars.baseUrl}/login`, {
            email: vars.email,
            password: vars.password
        });

        console.log("Status Code:", response.status);

        const authToken = response.data.token;

        console.log("Auth Token:", authToken);

        if (response.status === 200 && authToken) {
            console.log("Q3 Passed - Login successful");
        } else {
            console.log("Q3 Failed");
        }

    } catch (error) {
        console.log("Error:", error.response.data);
    }
}

loginTest();