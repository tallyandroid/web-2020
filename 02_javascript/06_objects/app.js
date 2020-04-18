const company = {
    name: "Vecctech Solutions",
    founded: 2018,
    founder: "Christian Tisby",
    business: "Software Development",
    createNewProduct: function(productName) {
        this.products.push(productName)
        console.log("Create Product")
        return this.products
    }

}

company.createNewProduct("iHome")