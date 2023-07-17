const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainer = document.querySelector('ul.gallery');

const createCardsMarkup = images
  .map(
    ({ url, alt }) =>
      `
        <li class="gallery__item">
          <img class="gallery__img"" src="${url}" alt="${alt}" width="300" height="180"></img>
        </li>
      `
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', createCardsMarkup);

galleryContainer.style.listStyle = 'none';
galleryContainer.style.paddingLeft = '0';
galleryContainer.style.display = 'flex';
galleryContainer.style.justifyContent = 'center';
galleryContainer.style.gap = '20px';
