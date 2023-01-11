// Сделать страницу новостей:

// - на странице у вас будет хэдер, футер, 
// а главное - карточки новостей. Дизайн абсолютно любой (можете сделать +/- как тут: 
// https://www.bbc.com/news/world)

// - у каждой карточки должны быть: изображение (любое),
//  тайтл и описание (сверстайте карточки на js как на уроке верстали через интерполяцию)
// - основной момент: GET запросом получаете эти данные: https://jsonplaceholder.typicode.com/posts
// Это массив, на основе этих данных рендерите карточки 
// (как тайтл берете - “title”, как описание - “body”)
// -Поробуйте немного попрактиковаться на json-server отправить запросы итд 

const wrapper = document.querySelector('.wrapper')



async function getData () {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach(e => {
            wrapper.innerHTML += `
                <div class="post">
                    <img src="postimg.png" alt="post">
                    <h2>${e.title}</h2>
                    <p>${e.body}</p>
                </div>
            `
        })
    }catch (e) {
        console.log(e)
    }

    
}

getData()