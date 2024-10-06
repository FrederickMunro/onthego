import RightArrow from '../assets/right-arrow.svg';

interface Props {
  img: string;
  title: string;
  price: number;
  symbol: string;
}

const BagContainer = ({ img, title, price, symbol }: Props) => {
  return(
    <div className='bag-container'>
      <img className='bag-container-image' src={img} />
      <div className='bag-text-container'>
        <h3 className='bag-container-title'>{title}</h3>
        <p className='bag-container-price'>{`${symbol}${price}.00`}</p>
        <div className='bag-button-container'>
          <button className='bag-container-details'>View details</button>
          <img className='bag-container-arrow' src={RightArrow} />
        </div>
      </div>
    </div>
  );
}

export default BagContainer;