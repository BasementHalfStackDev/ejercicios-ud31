const addListenersTo = (tableid) => {
    let table = document.getElementById(tableid);
    let trs = table.getElementsByTagName('tr');

    for (let i = 0; i < trs.length; i++) {
        let tr = trs[i];
        let tds = tr.getElementsByTagName('td');
    
        for (let j = 0; j < tds.length; j++) {
        let td = tds[j];
        let ps = td.getElementsByTagName('p');
        
        for (let k = 0; k < ps.length; k++) {
            let p = ps[k];
            p.addEventListener('click', () => {
                window.alert("You clicked a p element within the table " + tableid);
                });
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    addListenersTo("table1");
    addListenersTo("table2");
})
