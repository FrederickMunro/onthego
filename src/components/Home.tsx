import LargeBag from '../assets/largebag1.webp';
import SmallBag from '../assets/smallbag1.webp';
import Banner from '../assets/banner.webp';

import BagContainer from "./BagContainer";

const Home = () => {

  const bags = [
    {
      img: LargeBag,
      title: 'Great Day Large Tote Bag',
      price: 28,
      symbol: '$',
    },
    {
      img: SmallBag,
      title: 'Great Day Small Tote Bag',
      price: 25,
      symbol: '$',
    }
  ]

  return(
    <div className='home-container'>
      <img className='banner' src={Banner} />
      <div className='bags-container'>
        <h1 className='home-title'>Our Products</h1>
        <h2 className='home-subtitle'>Free shipping internationally on all items</h2>
        {
          bags.map((bag, index) => (
            <BagContainer
              key={index}
              img={bag.img}
              title={bag.title}
              price={bag.price}
              symbol={bag.symbol}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Home;