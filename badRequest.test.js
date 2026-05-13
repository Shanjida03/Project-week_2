const axios = require("axios");
const vars = require("../utils/variables");

async function badRequestTests() {

    // 1. Login without password
    try {

        await axios.post(`${vars.baseUrl}/login`, {
            email: vars.email
        });

    } catch (error) {

        console.log("Login without password:");
        console.log("Status:", error.response.status);

        if (error.response.status === 400) {
            console.log("Passed");
        }
    }

    // 2. GET invalid user
    try {

        await axios.get(`${vars.baseUrl}/users/999`);

    } catch (error) {

        console.log("\nGET invalid user:");
        console.log("Status:", error.response.status);

        if (error.response.status === 404) {
            console.log("Passed");
        }
    }

    // 3. PUT invalid endpoint
    try {

        await axios.put(`${vars.baseUrl}/unknown/2`, {
            name: "Test"
        });

    } catch (error) {

        console.log("\nPUT invalid endpoint:");
        console.log("Status:", error.response.status);

        if (error.response.status === 404) {
            console.log("Passed");
        }
    }

    // 4. PATCH invalid endpoint
    try {

        await axios.patch(`${vars.baseUrl}/unknown/2`, {
            job: "QA"
        });

    } catch (error) {

        console.log("\nPATCH invalid endpoint:");
        console.log("Status:", error.response.status);

        if (error.response.status === 404) {
            console.log("Passed");
        }
    }
}

badRequestTests();