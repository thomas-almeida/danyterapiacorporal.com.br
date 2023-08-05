
import services from "./services"

export default function ServiceOptions({selectedServices, onServiceChange}) {

  return (
    <div className="service-options-container">
      {
        services.map(service => (
          <label key={service.id}>
            <input type="checkbox" 
            name={service.name} 
            value={service.name}
            checked={selectedServices.includes(service.name)}
            onChange={onServiceChange}
            />
            {service.name}
          </label>
        ))
      }
    </div>
  )

}