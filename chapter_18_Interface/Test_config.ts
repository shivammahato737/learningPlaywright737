interface TestConfig {
    browser : string
    headless : boolean
    baseURL : string
    timeout : number
    retries ?: number
}
let ciConfig : TestConfig ={
    browser : "Chrome",
    headless : true,
    baseURL : "https://staging.app.com"
}