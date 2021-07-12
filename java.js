columns=parseFloat(prompt("Ingrese el número de columnas de tu matriz"));
rows=parseFloat(prompt("Ingrese el número de filas de tu matriz"));


function createMatriz(rows,columns) {
    let element=document.getElementById("container");
    let html=`<table>`;
    for(let i=0;i<rows;i++){
        html+=`<tr>`
        for(let j=0;j<columns;j++){
            html+=`<td>texto ${j+1} </th>`
        }
        html+=`</tr>`
    }

    html+=`</table>`
    element.innerHTML=html
    element.style.borderCollapse= "collapse"
}

createMatriz(rows,columns)
