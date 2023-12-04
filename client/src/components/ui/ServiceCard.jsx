
export default function ServiceCard(props) {

    const priceToReal = (price) => `R$ ${price},00 / 1h`

    return (
        <>
            <div className="service-card">
                <h3>{props.serviceName}</h3>
                <h3 className="service-price">{ priceToReal(props.servicePrice) }</h3>
                <p>{props.serviceDescription}</p>
            </div>
        </>
    )
}