const HighLevelApi = require("./src/HighLevel");

const account = require("./src/db/users").find((user) => user.account === "Summa Media");

const HighLevel = new HighLevelApi(account.apiToken);

(async () => {
    // CREATE CONTACT
    const contact = {
        firstName: "Ryan",
        lastName: "Roman5",
        name: "Ryan Roman5",
        email: "Ryan5@summamedia.co",
        phone: "715-252-1115",
        website: "https://linkedin.com",
        companyName: "Summa Media",
        city: "Denver",
        state: "Colorado",
        source: "LinkedIn",
    };

    try {
        await HighLevel.newPipelineOpportunity(account, contact);
    } catch (error) {
        console.log(error);
    }
})();
