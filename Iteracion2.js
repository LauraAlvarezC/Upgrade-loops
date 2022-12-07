//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la 
//propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: false}
]

for (let i=0; i<=alumns.length-1; i++){
    let isApproved=0

    if (alumns[i].T1 === true){
        isApproved = isApproved + 1
    } 
    if (alumns[i].T2 === true){
        isApproved = isApproved + 1
    } 
    if (alumns[i].T3 === true){
       isApproved =isApproved + 1
    } 
    if (isApproved >=2){
        alumns[i].approved = true
        //console.log(alumns[i].name + "esta aprobado")
    }
    else {
        alumns[i].approved = false
    }
    
}

console.log(alumns);
