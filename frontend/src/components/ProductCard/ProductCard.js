import React from 'react';
import Card from "../UI/Card/Card";


// Компонент, который рисует карточку для фильма: постер, название и ссылку,
// используя компонент UI/Card (карточка), основанный на стилях bootstrap.
const MovieCard = props => {
    const {product} = props;

    let photo = "http://localhost:8000/uploads/default_image.png";
    if (product.photos[0]) {
        photo = product.photos[0].photo
    }

    // достаём данные из movie
    const {name, id} = product;

    // создаём объект с данными (текстом и url) для ссылки
    const link = {
        text: 'Подробнее',
        url: '/products/' + id,
    };

    // возвращаем (рисуем) карточку с данными из movie и ссылкой.
    return <Card header={name} image={photo} link={link} className='h-100'/>;
};


export default MovieCard;
