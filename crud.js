const fs = require('fs');

//Create
fs.writeFile("employees.json",'{"name: Employee 1","salary":2000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log(" Dosya kaydedildi")

});

fs.readFile("employees.json", 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
});

fs.appendFile("employees.json",' \n{"name":"Employee 2", "salary": 3000}', 'utf8', (err) => {
    if(err) console.log(err)
        console.log("dosya eklendi")
})

fs.unlink("employes.json", (err) => {
    if(err) console.log(err);
    console.log("Dosya silindi")
})