

interface Props {
    cartState: string;
}

const SideCart = ({ cartState }: Props) => {



    return(
        <div className={`cart-container ${cartState}-slider`}>
            {
                true ? (
                    <>
                        <h2>Your Cart</h2>
                        <p>Product</p>
                        <p>Total</p>
                        <p>Estimated total</p>
                        <p></p>
                        <p>Tax included. Shipping and discounts calculated at checkout</p>
                    </>
                ) : (
                    <>
                        <h1>Your cart is empty</h1>
                    </>
                )
            }
        </div>
    );
}

export default SideCart;