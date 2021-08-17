// Import
import ServiceClass 	from "./parts/class";
import ServiceDecorator from "./parts/decorator";

// Build export
const Service = ServiceClass;
Service.store = ServiceDecorator;

export default Service;