require("dotenv").config();

module.exports = [
    {
        account: "Summa Media",
        apiToken: process.env.HIGHLEVEL_API_SUMMA,
        pipelines: [
            {
                name: "Pat Prospecting",
                pipelineID: "VuncwruYCI0APkgj7Xw3",
                stageID: "b2bd8fa0-a528-4605-9911-65bbfd0c68ee",
            },
            {
                name: "Sherry Peret",
                pipelineID: "9PmWq7A9lh6KF5ks2XoP",
                stageID: "30cd9ed9-8952-4680-be2f-54dafdfd4831",
            },
        ],
    },
];
