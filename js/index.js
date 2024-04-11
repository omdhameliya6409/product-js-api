let productsData = []; 

const uimaker = (data) => {
    document.getElementById("box").innerHTML = "";
    data.map((e) => {
        let title = document.createElement("h1");
        title.innerHTML = e.title;
        let price = document.createElement("h2");
        price.innerHTML = e.price;
        let description = document.createElement("p");
        description.innerHTML = e.description;
        let category = document.createElement("h5");
        category.innerHTML = e.category;
        let rating = document.createElement("h6");
        rating.innerHTML = `Rating: ${e.rating.rate} (${e.rating.count} reviews)`;
        let images = document.createElement("img");
        images.src = e.image;
        let div = document.createElement("div");
        div.append(images, title, price, description, category, rating);
        div.setAttribute("class", "data");
        document.getElementById("box").append(div);
    });
}

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        productsData = data;
        console.log(productsData);
        uimaker(productsData);
    })

const sorting = (val) => {
    if (val === "htl") {
        productsData.sort((a, b) => b.price - a.price);
        uimaker(productsData);
        alert("High to low Price successfully");
    } else {
        productsData.sort((a, b) => a.price - b.price);
        uimaker(productsData);
        alert("Low to high Price successfully");
    }
}
const filter = (val) => {
    let temp = productsData.filter((ele) => ele.category == val)
    uimaker(temp)
    alert("filter successfully")
}
const search = (value) => {
    let temp = productsData.filter((ele) => ele.title == value)
    uimaker(temp)

}
const handlesearch = (e) => {
    e.preventDefault()

    let title = document.getElementById("search-value").value
    search(title)
    alert("product search successfully")
}

document.getElementById("htl").addEventListener("click", () => sorting("htl"))
document.getElementById("lth").addEventListener("click", () => sorting("lth"))
document.getElementById("menclothing").addEventListener("click", () => filter("men's clothing"))
document.getElementById("jewelery").addEventListener("click", () => filter("jewelery"))
document.getElementById("electronics").addEventListener("click", () => filter("electronics"))
document.getElementById("womenclothing").addEventListener("click", () => filter("women's clothing"))

document.getElementById("search").addEventListener("submit", handlesearch)