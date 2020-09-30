const fs = require('fs');

function ajouter() {
    if (document.getElementById('titre').value !== "" || document.getElementById('description').value !== "") {
        let newData = {
            "id": new Date().getTime(),
            "titre": document.getElementById('titre').value,
            "description": document.getElementById('description').value
        }
        let data = JSON.stringify(getDonnees().concat(newData))
        fs.writeFileSync('data.json', data);
    }
}

function getDonnees() {
    return JSON.parse(fs.readFileSync('data.json'))
}