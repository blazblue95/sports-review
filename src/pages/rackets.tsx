import Header from '@/header/Header';

import { Card } from '../card/Card';

const Rackets = () => (
  <div>
    <Header title="Rackets" />
    <div className="grid grid-cols-4 gap-4 p-10">
      <Card
        title="Yonex Astrox 100zz"
        description="The best racket!"
        imgLink="https://cdn.shopify.com/s/files/1/0020/9407/1890/files/100_480x480.png?v=1648651607"
        hashtags={['#badminton', '#racket', '#yonex', '#astrox']}
      />
      <Card
        title="Yonex Astrox 88D Pro"
        description={`Match Type: Singles or Doubles \nStyle of Play: Highly aggressive. Powerful rear court attacking`}
        imgLink="https://cdn.shopify.com/s/files/1/0020/9407/1890/files/Astrox-88D_480x480.png?v=1648650118"
        hashtags={['#badminton', '#racket', '#yonex', '#astrox']}
      />
      <Card
        title="Victor Thruster FC"
        description={`Match Type: All-court doubles \nStyle of Play: Mix of power and control play`}
        imgLink="https://cdn.shopify.com/s/files/1/0020/9407/1890/files/f5e216a0-633f-4e2b-a977-2a21fb5ab7d7_x700_c6dc8887-ebe7-4ed5-8710-4d6b35f536bc_480x480.jpg?v=1670765025"
        hashtags={['#badminton', '#racket', '#victor', '#thruster']}
      />
      <Card
        title="Li-Ning BladeX 900 Sun"
        description={`Match Type: Singles or Doubles \nStyle of Play: All round`}
        imgLink="https://cdn.shopify.com/s/files/1/0020/9407/1890/files/9fc86c86-a99d-4b3f-8a46-87efb3a068ac_84270f8b-34b2-4a19-8650-446f8b030eae_480x480.jpg?v=1705051598"
        hashtags={['#badminton', '#racket', '#li-ning', '#bladex']}
      />
      <Card
        title="Yonex Arcsaber 11 Pro"
        description={`Match Type: Singles or doubles \nStyle of Play: Speed, counter attacking and accuracy`}
        imgLink="https://cdn.shopify.com/s/files/1/0020/9407/1890/files/Arc_480x480.png?v=1648650339"
        hashtags={['#badminton', '#racket', '#yonex', '#arcsaber']}
      />
    </div>
  </div>
);

export default Rackets;
