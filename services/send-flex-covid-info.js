const axios = require('axios').default

exports.sendFlexCovidInfo = async() => {
    const response = await axios.get( "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all",{
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data);

  let msg = {
    type: 'flex',
    altText: 'รายงานสถานการณโควิด ประจำวัน',
    contents: {
      type: 'bubble',
      hero: {
        type: 'image',
        url:
          'https://www.infoquest.co.th/wp-content/uploads/2021/01/20210105_Canva_COVID4-1024x576.png',
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover',
        action: {
          type: 'uri',
          uri: 'http://linecorp.com/',
        },
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'วันที่ 21 ธ.ค. 2565',
            weight: 'bold',
            size: 'xl',
            color: '#06AE24',
          },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'lg',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'ผู้ป่วยรายใหม่',
                    color: '#C12B0D',
                    size: 'sm',
                    flex: 5,
                  },
                  {
                    type: 'text',
                    text: '2000 ราย',
                    wrap: true,
                    color: '#C12B0D',
                    size: 'sm',
                    flex: 5,
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'ผู้เสียชีวิต',
                    color: '#000000',
                    size: 'sm',
                    flex: 5,
                  },
                  {
                    type: 'text',
                    text: '20 ราย',
                    wrap: true,
                    color: '#000000',
                    size: 'sm',
                    flex: 5,
                  },
                ],
              },
            ],
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'link',
            height: 'sm',
            action: {
              type: 'uri',
              label: 'ดูข้อมูลเพิ่มเติม',
              uri: 'https://linecorp.com',
            },
            color: '#ffffff',
          },
        ],
        flex: 0,
        backgroundColor: '#12A909',
      },
    },
  }

  return msg
}
