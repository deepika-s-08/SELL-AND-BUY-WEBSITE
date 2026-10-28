
/* PRODUCT DATA */

let items = [

    {
        name:"Samsung Mobile",
        category:"Mobile",
        price:7000,
        location:"Chennai",
        condition:"Good",
        icon:"📱"
    },

    {
        name:"HP Laptop",
        category:"Laptop",
        price:28000,
        location:"Coimbatore",
        condition:"Almost New",
        icon:"💻"
    },

    {
        name:"Wooden Chair",
        category:"Furniture",
        price:1500,
        location:"Madurai",
        condition:"Good",
        icon:"🪑"
    },

    {
        name:"Engineering Books",
        category:"Books",
        price:900,
        location:"Salem",
        condition:"Fair",
        icon:"📚"
    },

    {
        name:"Hero Bicycle",
        category:"Cycle",
        price:5500,
        location:"Chennai",
        condition:"Good",
        icon:"🚲"
    },

    {
        name:"Office Table",
        category:"Furniture",
        price:3000,
        location:"Trichy",
        condition:"Almost New",
        icon:"🪵"
    }

];


/* DISPLAY */

function showItems(list){

    let grid =
        document.getElementById("productGrid");

    grid.innerHTML="";

    if(list.length===0){

        grid.innerHTML=
        "<h3>No matching products found.</h3>";

        return;
    }

    list.forEach((item,index)=>{

        grid.innerHTML += `

        <div class="card">

            <div class="photo">
                ${item.icon}
            </div>

            <div class="details">

                <h3>${item.name}</h3>

                <p class="location">
                    📍 ${item.location}
                </p>

                <p class="amount">
                    ₹${item.price}
                </p>

                <span class="tag">
                    ${item.condition}
                </span>

                <button
                    onclick="viewItem('${item.name}')">

                    View Seller

                </button>

            </div>

        </div>

        `;

    });

}


/* SEARCH */

function searchItem(){

    let value =
        document.getElementById("search")
        .value
        .toLowerCase();

    let result =
        items.filter(item =>
            item.name.toLowerCase()
            .includes(value) ||
            item.category.toLowerCase()
            .includes(value)
        );

    showItems(result);

}


/* CATEGORY */

function filterItems(category){

    if(category==="All"){

        showItems(items);
        return;

    }

    let result =
        items.filter(item =>
            item.category===category
        );

    showItems(result);

}


/* SELL FORM SCROLL */

function openSeller(){

    document.getElementById("sellBox")
    .scrollIntoView({
        behavior:"smooth"
    });

}


/* VIEW SELLER */

function viewItem(name){

    alert(
        "Product: " + name +
        "\n\nSeller contact option opened."
    );

}


/* PUBLISH ITEM */

function publishItem(){

    let name =
        document.getElementById("itemName").value;

    let category =
        document.getElementById("itemCategory").value;

    let price =
        document.getElementById("itemPrice").value;

    let location =
        document.getElementById("itemLocation").value;

    let condition =
        document.getElementById("itemCondition").value;


    if(
        name==="" ||
        category==="" ||
        price==="" ||
        location==="" ||
        condition===""
    ){

        alert(
            "Please fill all product details."
        );

        return;

    }


    let icons = {

        Mobile:"📱",
        Laptop:"💻",
        Furniture:"🪑",
        Books:"📚",
        Cycle:"🚲"

    };


    items.unshift({

        name:name,
        category:category,
        price:Number(price),
        location:location,
        condition:condition,
        icon:icons[category]

    });


    showItems(items);


    document.getElementById("itemName").value="";
    document.getElementById("itemCategory").value="";
    document.getElementById("itemPrice").value="";
    document.getElementById("itemLocation").value="";
    document.getElementById("itemCondition").value="";


    alert(
        "✅ Product successfully listed!"
    );

}


/* INITIAL LOAD */

showItems(items);
