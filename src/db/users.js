require("dotenv").config();

module.exports = [
    {
        account: "Summa Media",
        apiToken: process.env.HIGHLEVEL_API_SUMMA,
        pipelines: [
            {
                name: "Pat Prospecting",
                pipelineId: "VuncwruYCI0APkgj7Xw3",
                stageId: "b2bd8fa0-a528-4605-9911-65bbfd0c68ee",
            },
            {
                name: "Sherry Peret",
                pipelineId: "9PmWq7A9lh6KF5ks2XoP",
                stageId: "30cd9ed9-8952-4680-be2f-54dafdfd4831",
            },
        ],
    },
];
