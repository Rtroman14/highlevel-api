const HighLevelApi = require("./src/HighLevel");

const account = require("./src/db/users").find((user) => user.account === "Summa Media");

const HighLevel = new HighLevelApi(account.apiToken);

(async () => {
    // CREATE CONTACT
    const contact = {
        firstName: "Johnny",
        lastName: "Petras",
        name: "Johnny Petras",
        email: "Johnny@summamedia.co",
        phone: "715-252-1111",
        website: "https://linkedin.com",
        companyName: "Summa Media",
        city: "Denver",
        state: "Colorado",
        source: "BlueBook",
    };

    try {
        // GET PIPELINES
        // const pipelines = await HighLevel.getPipelines();
        // for (let pipeline of pipelines.pipelines) {
        //     console.log(pipeline);
        // }
        //
        // GET OPPORTUNITIES
        // const { pipelineID } = account.pipelines.find((user) => user.name === "Pat Prospecting");
        // const opportunities = await HighLevel.getOpportunities(pipelineID);
        // console.log(opportunities.meta.total);
        //
        // GET NEXT PIPELINE
        const { name, pipelineID, stageID } = await HighLevel.nextPipeline(account);
        //
        // CREATE OPPORTUNITY
        // const data = {
        //     title: "CONTACT'S NAME",
        //     stageId: "30cd9ed9-8952-4680-be2f-54dafdfd4831",
        //     // assignedTo: "GxxZl4VVpFugRUNQ3moP",
        //     status: "open",
        //     // contactId: "YnOYeLNpfGlKUBHiJCWc",
        // };
        // const newOpportunity = await HighLevel.createOpportunity("9PmWq7A9lh6KF5ks2XoP", data);
        // console.log(newOpportunity);
        //
    } catch (error) {
        console.log(error);
    }
})();
