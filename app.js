const etlap = [

    {
        id: 1,
        etel: "Pepperoni pizza",
        meretek: "30cm, vagy 50cm",
        ital: "Pepsi Max",
        ar: "3500Ft",
        kep: "https://images.pexels.com/photos/4109078/pexels-photo-4109078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 2,
        etel: "Bolognai Spagetti",
        meretek: "kicsi, vagy nagy",
        ital: "Fanta narancs",
        ar: "2500Ft",
        kep: "https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 3,
        etel: "Hamburger",
        meretek: "kicsi, vagy nagy",
        ital: "Fanta szőlő",
        ar: "4000Ft",
        kep: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
    {
        id: 4,
        etel: "Saláta",
        meretek: "kicsi, vagy nagy",
        ital: "Sio Körte",
        ar: "3000Ft",
        kep: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
    {
        id: 5,
        etel: "Sült lazac",
        meretek: "kicsi, vagy nagy",
        ital: "Limonádé",
        ar: "4500Ft",
        kep: "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
    {
        id: 6,
        etel: "Sushi",
        meretek: "kicsi, vagy nagy",
        ital: "Szaké",
        ar: "8000Ft",
        kep: "https://images.pexels.com/photos/10692488/pexels-photo-10692488.jpeg"
    },
]

const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {

    output = "";

    etlap.map((kaja) => {

        output += `
        <div class="etelek">
            <h4>${kaja.etel}</h4>
            <p>${kaja.ital}</p>
            <p>${kaja.ar}</p>
            <img src='${kaja.kep}'>
        </div>
        `
    })

    result.innerHTML = output;
})