export default function ServiceCard(props) {
    return(
        <>
            <div className="service-card">
                <h3>{props.serviceName}</h3>
                <h3 className="service-price">{props.servicePrice}</h3>
                <p>{props.serviceDescription}</p>
            </div>
        </>
    )
}