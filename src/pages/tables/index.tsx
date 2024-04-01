import React from 'react';
import { useQRCode } from 'next-qrcode';
import { QRCode } from 'antd';
// import QRCodeVue3 from "qrcode-vue3";
// import 'vue3-next-qrcode/es/style.css
import { qrLogo, logo2 } from '@/utils/image';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

const Tables = () => {
  const { Canvas, SVG, Image } = useQRCode();

  return (
    <HomeLayout>
      <div className='row gap-2'>
        <div className='col-4'>
          <h4>Table 1, next-qrcode</h4>
          <div className='position-relative qr-wrapper'>
            <img className='w-100 position-absolute' style={{ zIndex: -1 }} src={qrLogo} alt="image" />
            <SVG
              text={'https://github.com/bunlong/next-qrcode'}
              options={{
                errorCorrectionLevel: "H",
                margin: 8,
                // width: 250,
                scale: 20,
                color: {
                  // dark: '#010599FF',
                  // light: '#FFBF60FF',
                },
              }}
            />
          </div>
        </div>
        <div className='col-4'>
          <h4>Table 2, antd</h4>
          <div className='position-relative qr-wrapper'>
            <img className='w-75 position-absolute' style={{ zIndex: -1 }} src={qrLogo} alt="image" />
            <QRCode
            errorLevel="H"
            size={200}
            iconSize={160 / 4}
            value='https://table-thread-client-app.vercel.app/'
            icon=" "
          />
          </div>
        </div>
        <div className='col-4'>
          <h4>Table 3, antd</h4>
          <QRCode
            errorLevel="H"
            size={200}
            iconSize={160 / 4}
            value='https://table-thread-client-app.vercel.app/'
            icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Tables;
