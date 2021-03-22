import refs from '../refs';
import darkTheme from './mapThemeDark.json';

let geocoder;
let map;
const ACCES_ID = '9MUgFKJor2COZa1qBvUG9';
const SECRET_KEY = 'bptJv1BSZdk2IYRlNIFPqLdlTRpkWTryRnh0UK1n';

export default class MyMap {
  constructor() {}

  initializeMap() {
    let mapStyle;
    if (localStorage.getItem('LIGHT')) {
      mapStyle = [];
    } else {
      mapStyle = darkTheme;
    }
    geocoder = new google.maps.Geocoder();
    const latlng = new google.maps.LatLng(47.563, 24.113);
    const mapOptions = {
      zoom: 2,
      center: latlng,
      styles: mapStyle,
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  eventListenerOnButtons({ target }) {
    map.overlayMapTypes.pop();

    if (target.dataset.layer === 'remove') {
      this.initializeMap();
      this.codeAddress();
      return;
    }

    this.addRadar(target.dataset.layer, '50');
  }

  addRadar(layer, opacity) {
    const radar = new google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        return [
          `https://maps.aerisapi.com/${ACCES_ID}_${SECRET_KEY}/${layer}:${opacity}/`,
          zoom,
          '/',
          coord.x,
          '/',
          coord.y,
          '/current.png',
        ].join('');
      },
      tileSize: new google.maps.Size(256, 256),
    });

    map.overlayMapTypes.push(radar);
  }

  codeAddress() {
    const address = refs.headerInput.value;

    geocoder.geocode({ address }, function (results, status) {
      if (status === 'OK') {
        map.zoom = 7;
        map.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
      } else {
        swal({
          title: 'Please, write city or country name!',
          icon: 'info',
        });
      }
    });
  }
}
