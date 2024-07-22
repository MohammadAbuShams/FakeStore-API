const productForm = document.querySelector("form");
productForm.onsubmit = async function(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const title = elements['title'].value;
    // elemnt[0].value
    const price = elements['price'].value;

    const { data } = await axios.post('https://dummyjson.com/products/add', {
        title,
        price
    });
    console.log(data);
}
