let wejsc = prompt("Co chciałbyś zrobić");
const todos = ['Kup warzywa', 'Kup owoce'];
while (wejsc !== 'wyjdz' && wejsc !== 'w') {
    wejsc = prompt("Co chciałbyś zrobić");
    if (wejsc === "lista" || wejsc === "l") {
        console.log("*************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} :${todos[i]}`);
        }
        console.log("*************");
    }
    else if (wejsc === "nowy" || wejsc === "n") {
        const newTodo = prompt("Co nowego?");
        todos.push(newTodo);
        console.log(`${newTodo} dodany do listy `);
    }
    else if (wejsc == "usun" || wejsc == "u") {
        const index = parseInt(prompt("Wpisz numer do usuniecia"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok zostało usuniete ${deleted[0]}`);
        } else { console.log("nieznany index"); }
    }
}

console.log("Wyszedles z aplikacji");

