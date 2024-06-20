<script>
import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: 'AIzaSyD03tEY86DEARGYKBLDy9cXR8gpVF0empc',
  version: 'weekly'
})

export default {
  data() {
    return {}
  },
  mounted() {
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary('maps')
      const { AdvancedMarkerElement } = await google.maps.importLibrary('marker')
      //- 地圖色彩樣式
      const styledMapType = new google.maps.StyledMapType(
        [
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [
              {
                saturation: '0'
              },
              {
                color: '#a1a195'
              },
              {
                lightness: '0'
              }
            ]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                visibility: 'on'
              },
              {
                lightness: '0'
              },
              {
                gamma: '1'
              },
              {
                color: '#fff5d6'
              }
            ]
          },
          {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [
              {
                lightness: 20
              },
              {
                color: '#efefe1'
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
              {
                lightness: 17
              },
              {
                weight: 1.2
              }
            ]
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#808077'
              },
              {
                saturation: '0'
              }
            ]
          },
          {
            featureType: 'administrative.province',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#808077'
              }
            ]
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#808077'
              }
            ]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f8f8ea'
              },
              {
                lightness: '0'
              },
              {
                gamma: '1'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#fae2db'
              },
              {
                lightness: '0'
              },
              {
                gamma: '1.00'
              }
            ]
          },
          {
            featureType: 'poi.medical',
            elementType: 'geometry',
            stylers: [
              {
                color: '#d39d9d'
              },
              {
                visibility: 'on'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#cce2c5'
              },
              {
                visibility: 'on'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#fefef8'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
              {
                visibility: 'on'
              },
              {
                color: '#f2b99d'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                lightness: 29
              },
              {
                weight: 0.2
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f6f6eb'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#93cada'
              },
              {
                lightness: 17
              }
            ]
          }
        ],
        { name: 'Styled Map' }
      )
      //- 地圖位置
      const map = new Map(document.getElementById('map'), {
        center: { lat: 22.625880531014303, lng: 120.2790635759039 },
        zoom: 16,
        mapId: '4504f8b37365c3d0',
        mapTypeControlOptions: {
          mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        }
      })
      //- 地點標記
      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 22.625880531014303, lng: 120.2790635759039 }
      })

      map.mapTypes.set('styled_map', styledMapType)
      map.setMapTypeId('styled_map')
    })
  }
}
</script>

<template lang="pug">
#contact
  section#map
  section.contact
    h2.sectionTitle 歡迎來信聯絡
    .content
      .companyInfo
        h3 讓我們建立聯繫
        .contactData
          a(href='mailto:service@hexschool.com?subject=您好，我想與您合作。&body=如果您看到這封 Email，請回覆我，期待與您合作，謝謝！') Email：service@hexschool.com
          a(href='tel:0912345678') 電話：0912345678
        .other
          p 歡迎隨時透過表單、Email 或電話來聯絡我！
          p 期待能夠與您一同完成一份獨一無二且精緻的作品。
      .customInfo
        form(action='')
          input(type='text' name='name' placeholder='輸入您的姓名')
          input(type='text' email='name' placeholder='輸入您的Email')
          textarea(name='message' rows='8' placeholder='您想傳給我的訊息')
          button.primaryBtn(type='submit')
            span 填好送出
</template>
