const listaDeCompras = ["leche", "pan", "huevo", "galletas", "arroz"];

listaDeCompras.push("Aceite de girasol");

listaDeCompras.pop();

const misTresPelisFav = [
    {titulo: "Interestelar",director: "Christopher Nolan", fecha: new Date(2014, 4, 6)},
    {titulo: "Django", director: "Quentin Tarantino", fecha: new Date(2013, 1, 31)},
    {titulo: "El Rey Leon", director: "Rob Minkoff", fecha: new Date(1994, 7, 7)}
]

console.log(misTresPelisFav[2].fecha)

const listaPosteriores = misTresPelisFav.filter(list => {
    if (list.fecha > new Date(2010, 1, 1)){
    return list;
    }
})

const listaDirectores = misTresPelisFav.map(list => list.director);

const listaTitulos = misTresPelisFav.map(list => list.titulo);

const listaConcatenada = listaDirectores.concat(listaTitulos);

const listaConcatenadaProp = [...listaDirectores, ...listaTitulos];
