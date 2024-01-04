import { crawl, write } from "./core.js";


const configs = [
    {
        url: "https://defillama.com/yields",
        match: "https://defillama.com/**",
        maxPagesToCrawl: 1000,
        outputFileName: "defillama.json",
    },
    {
        url: "https://nansen-ai.zendesk.com/hc/en-us",
        match: "https://nansen-ai.zendesk.com/hc/en-us/**",
        maxPagesToCrawl: 1000,
        outputFileName: "nansen-ai-zendesk.json",
    },
    {
        url: "https://academy.glassnode.com/",
        match: "https://academy.glassnode.com/**",
        maxPagesToCrawl: 1000,
        outputFileName: "glassnode_academy.json",
    },
    {
        url: "https://tokenterminal.com/terminal",
        match: "https://tokenterminal.com/terminal/**",
        maxPagesToCrawl: 1000,
        outputFileName: "tokenterminal.json",
    },
    {
        url: "https://members.delphidigital.io/",
        match: "https://members.delphidigital.io/**",
        maxPagesToCrawl: 1000,
        outputFileName: "delphidigital.json",
    },
    {
        url: "https://insights.glassnode.com/",
        match: "https://insights.glassnode.com/**",
        maxPagesToCrawl: 1000,
        outputFileName: "glassnode_insights.json",
    },
    {
        url: "https://www.coindesk.com/",
        match: "https://www.coindesk.com/**",
        maxPagesToCrawl: 1000,
        outputFileName: "coindesk.json",
    },
    {
        url: "https://nftgo.io/",
        match: "https://nftgo.io/**",
        maxPagesToCrawl: 1000,
        outputFileName: "nftgo.json",
    },
    {
        url: "https://www.nftscan.com/",
        match: "https://www.nftscan.com/**",
        maxPagesToCrawl: 1000,
        outputFileName: "nftscan.json",
    },
    {
        url: "http://nfteye.io/",
        match: "http://nfteye.io/**",
        maxPagesToCrawl: 1000,
        outputFileName: "nfteye.json",
    },
    {
        url: "https://www.deepnftvalue.com/",
        match: "https://www.deepnftvalue.com/**",
        maxPagesToCrawl: 1000,
        outputFileName: "deepnftvalue.json",
    },
    {
        url: "https://www.cryptoslam.io/collections",
        match: "https://www.cryptoslam.io/collections**",
        maxPagesToCrawl: 1000,
        outputFileName: "cryptoslam.json",
    }
];

for (const config of configs) {
    await crawl(config);
    await write(config);
}

