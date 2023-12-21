
  let currentIndex = 0;

  function openGallery(imageArray) {
    currentIndex = 0;
    updateSlider(imageArray);
    document.querySelector('.gallery').style.display = 'flex';
  }

  function closeGallery() {
    document.querySelector('.gallery').style.display = 'none';
  }

  function updateSlider(images) {
    const slider = document.getElementById('imageSlider');
    slider.innerHTML = '';

    images.forEach((imageSrc, index) => {
      const slide = document.createElement('div');
      slide.classList.add('slide');

      const img = document.createElement('img');
      img.src = imageSrc;

      slide.appendChild(img);
      slider.appendChild(slide);
    });

    updateSliderPosition();
  }

  function prevSlide() {
    const images = getCurrentImages();
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1;
    }
    updateSliderPosition();
  }

  function nextSlide() {
    const images = getCurrentImages();
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    const slider = document.getElementById('imageSlider');
    const newPosition = currentIndex * -100;
    slider.style.transform = `translateX(${newPosition}%)`;
  }

  function getCurrentImages() {
    const gallery = document.getElementById('imageGallery');
    const currentCard = gallery.querySelector('.card.active');
    if (currentCard) {
      const cardIndex = Array.from(gallery.children).indexOf(currentCard);
      switch (cardIndex) {
        case 0:
          return ['project1.jpeg', 'project11.jpeg', 'project12.jpeg'];
        case 1:
          return ['project2.jpeg', 'project21.jpeg', 'project22.jpeg','project23.jpeg'];
        case 2:
          return ['image7.jpg', 'image8.jpg', 'image9.jpg'];
        case 3:
          return ['image10.jpg', 'image11.jpg', 'image12.jpg'];
        case 4:
          return ['image13.jpg', 'image14.jpg', 'image15.jpg'];
        case 5:
          return ['image16.jpg', 'image17.jpg', 'image18.jpg'];
        default:
          return [];
      }
    }
    return [];
  }

