if (document.querySelector('#map')) {
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [55.96375295281841,43.0822816166677],
      zoom: 14,
      controls: ['zoomControl'],
    });

    myMap.geoObjects.add(new ymaps.Placemark([55.96767756877536,43.11276449999992]));
  }
}
