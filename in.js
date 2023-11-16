const div = document.getElementById('div')
//const btn = document.getElementById('btn')
const btns= document.querySelectorAll('.btn')

let page = 1
const limit = 10

btns.forEach(btn => {
    btn.addEventListener('click', () => {
    getProducts(btn.innerHTML)
    })
})

async function getProducts (page) {

    let skip = (page - 1) * limit

    const response = await fetch(`https://dummyjson.com/products?page=${page}&limit=${limit}&skip=${skip}`)
    const data = await response.json()
    div.innerHTML = ''
    console.log(data);
    
    data.products.forEach(item => {

        const p = document.createElement('p')
        p.textContent = `${item.title}`
        div.appendChild(p)
    })

}

getProducts(1)