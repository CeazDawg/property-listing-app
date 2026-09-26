
import type { Property } from '../types';


interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
      <img
        src={property.imageUrl}
        alt={property.imageAlt}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{property.title}</h3>
          <address className="not-italic text-sm text-gray-600 mb-3">{property.address}</address>
          <p className="text-lg font-semibold text-indigo-600 mb-3">
            ${property.price.toLocaleString()}/mo
          </p>
          <ul className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4" aria-label="Property features">
            <li><span className="font-medium text-gray-700">{property.beds}</span> Beds</li>
            <li><span className="font-medium text-gray-700">{property.baths}</span> Baths</li>
            <li><span className="font-medium text-gray-700">{property.sqft.toLocaleString()}</span> Sq Ft</li>
          </ul>
        </div>
        <a
          href={`/properties/${property.id}`}
          className="inline-block text-center bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-colors"
          aria-label={`View details for ${property.title}`}
        >
          View Property Details
        </a>
      </div>
    </article>
  );
};
