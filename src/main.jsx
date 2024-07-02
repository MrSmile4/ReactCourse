import ReactDOM from 'react-dom/client'
import {restaurants} from '../materials/mock'

ReactDOM.createRoot(document.getElementById('root')).render(
<div style={{fontFamily:"Times New Roman", paddingLeft: 20, paddingRight: 20}}>
  <h1 style={{textAlign: 'center', color: 'navy'}}>Рестораны</h1>
  <div style={{display:'grid'}}>
    <div style={{display: 'flex', width: "100%", justifyContent:'space-between'}}>
      {/*Первый*/}
      <div>
        <h2 style={{color: 'brown'}}>{restaurants[0].name}</h2>
        <h3 style={{color: 'blue'}}>Меню:</h3>
        <ul style={{display:'grid', gap: 15 }}>
          <li style={{display:'grid'}}>
            <span>Name: {restaurants[0].menu[0].name}</span>
            <span>Ingredients: {restaurants[0].menu[0].ingredients[1]} and {restaurants[0].menu[0].ingredients[0]}</span>
            <span>Price: {restaurants[0].menu[0].price}</span>
          </li>
          <li style={{display:'grid'}}>
              <span>Name: {restaurants[0].menu[1].name}</span>
              <span>Ingredients: {restaurants[0].menu[1].ingredients[0]}</span>
              <span>Price: {restaurants[0].menu[1].price}</span>
          </li>
          <li style={{display:'grid'}}>
              <span>Name: {restaurants[0].menu[2].name}</span>
              <span>Ingredients: {restaurants[0].menu[2].ingredients[1]} and {restaurants[0].menu[2].ingredients[0]}</span>
              <span>Price: {restaurants[0].menu[2].price}</span>
          </li>
        </ul>
        <div>
          <h3 style={{color: 'green'}}>Отзывы:</h3>
          <ul style={{display:'grid', gap: 15}}>
            <li style={{display:'grid'}}>
              <span>{restaurants[0].reviews[0].user}: {restaurants[0].reviews[0].text}</span>
              <span>{restaurants[0].reviews[0].rating}★</span>
            </li>
            <li style={{display:'grid'}}>
              <span>{restaurants[0].reviews[1].user}: {restaurants[0].reviews[1].text}</span>
              <span>{restaurants[0].reviews[1].rating}★</span>
            </li>
          </ul>
        </div> 
      </div>
      {/*Второй*/}
      <div>
        <h2 style={{color: 'brown'}}>{restaurants[1].name}</h2>
        <h3 style={{color: 'blue'}}>Меню:</h3>
        <ul style={{display:'grid', gap: 15 }}>
          <li style={{display:'grid'}}>
            <span>Name: {restaurants[1].menu[0].name}</span>
            <span>Ingredients: {restaurants[1].menu[0].ingredients[0]} and {restaurants[1].menu[0].ingredients[1]} and {restaurants[1].menu[0].ingredients[2]}</span>
            <span>Price: {restaurants[1].menu[0].price}</span>
          </li>
          <li style={{display:'grid'}}>
              <span>Name: {restaurants[1].menu[1].name}</span>
              <span>Ingredients: {restaurants[1].menu[1].ingredients[0]} and {restaurants[1].menu[1].ingredients[1]} and {restaurants[1].menu[1].ingredients[2]} and {restaurants[1].menu[1].ingredients[3]}</span>
              <span>Price: {restaurants[1].menu[1].price}</span>
          </li>
        </ul>
        <div>
          <h3 style={{color: 'green'}}>Отзывы:</h3>
          <ul style={{display:'grid', gap: 15 }}>
            <li style={{display:'grid'}}>
              <span>{restaurants[1].reviews[0].user}: {restaurants[1].reviews[0].text}</span>
              <span>{restaurants[1].reviews[0].rating}★</span>
            </li>
            <li style={{display:'grid'}}>
              <span>{restaurants[1].reviews[1].user}: {restaurants[1].reviews[1].text}</span>
              <span>{restaurants[1].reviews[1].rating}★</span>
            </li>
            <li style={{display:'grid'}}>
              <span>{restaurants[1].reviews[2].user}: {restaurants[1].reviews[2].text}</span>
              <span>{restaurants[1].reviews[2].rating}★</span>
            </li>
          </ul>
        </div> 
      </div>
      {/*Третий*/}
      <div>
        <h2 style={{color: 'brown'}}>{restaurants[2].name}</h2>
        <h3 style={{color: 'blue'}}>Меню:</h3>
        <ul style={{display:'grid', gap: 15 }}>
          <li style={{display:'grid'}}>
            <span>Name: {restaurants[2].menu[0].name}</span>
            <span>Ingredients: {restaurants[2].menu[0].ingredients[0]}</span>
            <span>Price: {restaurants[2].menu[0].price}</span>
          </li>
          <li style={{display:'grid'}}>
            <span>Name: {restaurants[2].menu[1].name}</span>
            <span>Ingredients: {restaurants[2].menu[1].ingredients[0]} and {restaurants[2].menu[1].ingredients[1]}</span>
            <span>Price: {restaurants[2].menu[1].price}</span>
          </li>
          <li style={{display:'grid'}}>
            <span>Name: {restaurants[2].menu[2].name}</span>
            <span>Ingredients: {restaurants[2].menu[2].ingredients[0]}</span>
            <span>Price: {restaurants[2].menu[2].price}</span>
          </li>
        </ul>
        <div>
          <h3 style={{color: 'green'}}>Отзывы:</h3>
          <ul style={{display:'grid'}}>
            <span>{restaurants[2].reviews[0].user}: {restaurants[2].reviews[0].text}</span>
            <span>{restaurants[2].reviews[0].rating}★</span>
          </ul>
        </div> 
      </div>
      {/*Четвертый*/}
      <div>
        <h2 style={{color: 'brown'}}>{restaurants[3].name}</h2>
        <h3 style={{color: 'blue'}}>Меню:</h3>
        <ul style={{display:'grid', gap: 15}}>
          <li style={{display:'grid'}}>
            <span>Name: {restaurants[3].menu[0].name}</span>
            <span>Ingredients: {restaurants[3].menu[0].ingredients[0]}</span>
            <span>Price: {restaurants[3].menu[0].price}</span>
          </li>
          <li style={{display:'grid'}}>
            <span>Name: {restaurants[3].menu[1].name}</span>
            <span>Ingredients: {restaurants[3].menu[1].ingredients[0]} and {restaurants[3].menu[1].ingredients[1]}</span>
            <span>Price: {restaurants[3].menu[1].price}</span>
          </li>
        </ul>
        <div>
          <h3 style={{color: 'green'}}>Отзывы:</h3>
          <ul style={{display:'grid', gap: 15}}>
            <li style={{display:'grid'}}>
              <span>{restaurants[3].reviews[0].user}: {restaurants[3].reviews[0].text}</span>
              <span>{restaurants[3].reviews[0].rating}★</span>
            </li>
            <li style={{display:'grid'}}>
              <span>{restaurants[3].reviews[1].user}: {restaurants[3].reviews[1].text}</span>
              <span>{restaurants[3].reviews[1].rating}★</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>)
