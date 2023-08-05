
import services from "./services"

export default function ServiceOptions() {

  return (
    <div className="service-options-container">
      {
        services.map(service => (
          <label key={service.id}>
            <input type="checkbox" value={service.name} />
            {service.name}
          </label>
        ))
      }
    </div>
  )

}