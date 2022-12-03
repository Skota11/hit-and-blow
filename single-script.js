let turn = 1;
let dan = 0;
const color = ["red", "blue", "yellow-green", "yellow", "pink", "white"];
const dan_list = ["A", "B", "C", "D"];
let com = [];
let select = [];
let alreadyhit = [];
let hit = 0;
let blow = 0;
let select_num;
com_color();
element(`${turn}-${dan_list[dan]}`).style.border = "solid 3px"
function com_color() {
    for (let i = 0; i < 4; i++) {
        com[i] = color[Math.floor(Math.random() * 6)];
    }
}
function selectok() {
    if (select.length == 4) {
        for (let index = 0; index < 4; index++) {
            if (com[index] == select[index]) {
                hit++
                console.log(hit)
                alreadyhit.push(index)
            }
        }
        for (let index = 0; index < 4; index++) {
            if (com.includes(select[index])) {
                if (!alreadyhit.includes(index)) {
                    blow++;
                    console.log(blow)
                }
            }
        }
        if (hit == 4) {
            element(`${turn}-result`).textContent = `4ヒット！`
            toast1.show();
        } else {
            element(`${turn}-${dan_list[dan]}`).style.border = "solid 1px"
            element(`${turn}-result`).textContent = `${hit}ヒット/${blow}ブロー`
            turn++;
            dan = 0;
            element(`${turn}-A`).style.border = "solid 3px"
            select = [];
            alreadyhit = [];
            hit = 0;
            blow = 0;
        }
    } else {
        toast.show();
    }
}
function select_color(tmp) {
    if (tmp == "right") {
        if (dan !== 3) {
            dan = dan + 1
            console.log(dan)
            element(`${turn}-${dan_list[dan - 1]}`).style.border = "solid 1px"
            element(`${turn}-${dan_list[dan]}`).style.border = "solid 3px"
        }
    }
    if (tmp == "left") {
        if (dan !== 0) {
            dan = dan - 1
            console.log(dan)
            element(`${turn}-${dan_list[dan + 1]}`).style.border = "solid 1px"
            element(`${turn}-${dan_list[dan]}`).style.border = "solid 3px"
        }
    }
    if (tmp == "red") {
        select[dan] = "red";
        element(`${turn}-${dan_list[dan]}`).innerHTML = `<img alt="red" src="https://hit-and-brow.skota11.repl.co/red.svg"/>`
        if (dan !== 3) {
            dan = dan + 1
            console.log(dan)
            element(`${turn}-${dan_list[dan - 1]}`).style.border = "solid 1px"
            element(`${turn}-${dan_list[dan]}`).style.border = "solid 3px"
        }

    }
    if (tmp == "blue") {
        select[dan] = "blue";
        element(`${turn}-${dan_list[dan]}`).innerHTML = `<img alt="blue" src="https://hit-and-brow.skota11.repl.co/blue.svg"/>`
        if (dan !== 3) {
            dan = dan + 1
            console.log(dan)
            element(`${turn}-${dan_list[dan - 1]}`).style.border = "solid 1px"
            element(`${turn}-${dan_list[dan]}`).style.border = "solid 3px"
        }

    }
    if (tmp == "yellow-green") {
        select[dan] = "yellow-green";
        element(`${turn}-${dan_list[dan]}`).innerHTML = `<img alt="yellow-green" src="https://hit-and-brow.skota11.repl.co/yellow-green.svg"/>`
        if (dan !== 3) {
            dan = dan + 1
            console.log(dan)
            element(`${turn}-${dan_list[dan - 1]}`).style.border = "solid 1px"
            element(`${turn}-${dan_list[dan]}`).style.border = "solid 3px"
        }

    }
    if (tmp == "yellow") {
        select[dan] = "yellow";
        element(`${turn}-${dan_list[dan]}`).innerHTML = `<img alt="yellow" src="https://hit-and-brow.skota11.repl.co/yellow.svg"/>`
        if (dan !== 3) {
            dan = dan + 1
            console.log(dan)
            element(`${turn}-${dan_list[dan - 1]}`).style.border = "solid 1px"
            element(`${turn}-${dan_list[dan]}`).style.border = "solid 3px"
        }

    }
    if (tmp == "pink") {
        select[dan] = "pink";
        element(`${turn}-${dan_list[dan]}`).innerHTML = `<img alt="pink" src="https://hit-and-brow.skota11.repl.co/pink.svg"/>`
        if (dan !== 3) {
            dan = dan + 1
            console.log(dan)
            element(`${turn}-${dan_list[dan - 1]}`).style.border = "solid 1px"
            element(`${turn}-${dan_list[dan]}`).style.border = "solid 3px"
        }

    }
    if (tmp == "white") {
        select[dan] = "white";
        element(`${turn}-${dan_list[dan]}`).innerHTML = `<img alt="white" src="https://hit-and-brow.skota11.repl.co/white.svg"/>`
        if (dan !== 3) {
            dan = dan + 1
            console.log(dan)
            element(`${turn}-${dan_list[dan - 1]}`).style.border = "solid 1px"
            element(`${turn}-${dan_list[dan]}`).style.border = "solid 3px"
        }

    }
}
function element(id) {
    return document.getElementById(id);
}