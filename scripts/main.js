const fs = require('fs');

function getDonnees() {
    return JSON.parse(fs.readFileSync('data.json'))
}

function main() {
    let main = document.getElementById('texte')
    if (getDonnees().length !== 0) {
        for (let index = 0; index < getDonnees().length; index++) {
            let container = document.createElement('div')
            container.classList.add('mydiv')
            container.id = getDonnees()[index].id
            // Creation du Titre
            let titre = document.createElement('p')
            let textTitre = document.createTextNode(getDonnees()[index].titre)
            titre.appendChild(textTitre)
            // Creation de la Description
            let description = document.createElement('p')
            let textDescription = document.createTextNode(getDonnees()[index].description)
            description.appendChild(textDescription)
            // Creation du button pour effacer
            let btn = document.createElement('button')
            btn.classList.add('btnDel')
            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            svg.classList.add('delImg')
            let path = document.createElementNS('http://www.w3.org/2000/svg', "path")
            path.setAttributeNS(null, "d", "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z")
            svg.setAttribute("width", "40")
            svg.setAttribute("height", "40")
            svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
            svg.setAttribute("viewBox", "0 0 24 24")
            svg.appendChild(path)
            btn.onclick = function () { effacer(getDonnees()[index].id) }
            btn.appendChild(svg)
            // Construction de l'element final
            container.appendChild(titre)
            container.appendChild(description)
            container.appendChild(btn)
            // Object final
            main.appendChild(container)
        }
    } else {
        main.innerHTML = "Genial on à rien à foutre !!!"
    }
}

function effacer(id) {
    let data = getDonnees()
    for (let index = 0; index < data.length; index++) {
        if (data[index].id == id) {
            data.splice(index, 1)
            if (data.length === 0) {
                data = []
            }
            fs.writeFileSync('data.json', JSON.stringify(data))
            window.location.reload()
        }
    }
}