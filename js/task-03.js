'use strict';

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

const galleryParrent = document.querySelector('.gallery');

const markupGalleryHTML = images
  .map(
    ({ url, alt }) =>
      `
        <li>
          <img class="picture" src="${url}" alt="${alt}" width="300"></img>
        </li>
      `
  )
  .join('');

galleryParrent.insertAdjacentHTML('beforeend', markupGalleryHTML);

galleryParrent.style.listStyle = 'none';
galleryParrent.style.paddingLeft = '0';
galleryParrent.style.display = 'flex';
galleryParrent.style.justifyContent = 'center';
galleryParrent.style.gap = '20px';

const pictureEl = document.querySelector('.picture');

pictureEl.style.display = 'block';
pictureEl.style.maxWidth = '100%';
pictureEl.style.height = 'auto';

//* ---- Second option (reduce)
// const galleryParrent = document.querySelector('.gallery');

// const createGalleryItem = ({ url, alt }) =>
//   `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;

// const markupGalleryHTML = images.reduce((acc, item) => acc + createGalleryItem(item), '');

// galleryParrent.insertAdjacentHTML('afterbegin', markupGalleryHTML);
// galleryParrent.setAttribute(
//   'style',
//   'list-style-type:none; display: flex; justify-content: center; gap: 20px'
// );
