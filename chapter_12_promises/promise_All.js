let checkAuth = Promise.resolve("Auth OK")
let checkDB = Promise.resolve("DB OK")
let checkCache = Promise.resolve("Cache OK")

Promise.all([checkAuth, checkDB, checkCache]).then(function(results){
    console.log("All checks", results);
    
})

