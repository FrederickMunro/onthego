

interface Props {
    cartState: string;
}

const SideCart = ({ cartState }: Props) => {



    return(
        <div className={`cart-container ${cartState}-slider`}>
            {
                true ? (
                    <div className='cart-info-container'>
                        <div className='cart-header'>
                            <h2 className='cart-title'>Your Cart</h2>
                            <div className='cart-prod-total'>
                                <p className=''>Product</p>
                                <p className=''>Total</p>
                            </div>
                        </div>
                        <div className='cart-items-container'>
                            tt
                        </div>
                        <div className='cart-footer'>
                            <div className='cart-prod-total'>
                                <p className=''>Estimated total</p>
                                <p className=''>$$$</p>
                            </div>
                            <p className=''>Tax included. Shipping and discounts calculated at checkout</p>
                        </div>
                    </div>
                ) : (
                    <div className='cart-info-container'>
                        <h1 className='cart-title'>Your cart is empty</h1>
                    </div>
                )
            }
        </div>
    );
}

export default SideCart;