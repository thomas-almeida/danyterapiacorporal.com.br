/* eslint-disable react/prop-types */

export default function ServiceCard(props) {

    const priceToReal = (price) => `R$ ${price},00`

    return (
        <>
            <div className="service-card">
                <h3>{props.serviceName}</h3>
                <h3 className="service-price">{ priceToReal(props.ServicePriceOne) }/ {props.ServicePriceOneTime}</h3>
                {
                    props.ServicePriceTwo && 
                    <h3 className="service-price">{ priceToReal(props.ServicePriceTwo) }/ {props.ServicePriceTwoTime}</h3>
                }
                <p>{props.serviceDescription}</p>
            </div>
        </>
    )
}