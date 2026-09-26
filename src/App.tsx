
import { PropertyCard } from './components/PropertyCard';
import { SponsorBanner } from './components/SponsorBanner';
import { SearchFilters } from './components/SearchFilters';
import type { Property, Sponsor } from './types';


const sampleProperties: Property[] = [
  {
    id: 'prop-101',
    title: 'Modern Downtown Loft',
    address: '123 Grand Ave, Los Angeles, CA 90012',
    price: 2400,
    beds: 1,
    baths: 1,
    sqft: 850,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500',
    imageAlt: 'Interior view of a modern apartment loft with hardwood floors',
  },
  {
    id: 'prop-102',
    title: 'Spacious Suburban Home',
    address: '456 Oak Lane, Pasadena, CA 91101',
    price: 3600,
    beds: 3,
    baths: 2,
    sqft: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500',
    imageAlt: 'Exterior view of a suburban residential house with front lawn',
  },
  {
    id: 'prop-103',
    title: 'Cozy Beachside Condo',
    address: '789 Ocean Blvd, Long Beach, CA 90802',
    price: 2900,
    beds: 2,
    baths: 2,
    sqft: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500',
    imageAlt: 'Exterior view of a beachside condominium building',
  },
];

const sampleSponsor: Sponsor = {
  id: 'spon-001',
  businessName: 'Apex Home Insurance',
  headline: 'Protect your rental with affordable monthly coverage starting at $12/mo.',
  imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100',
  imageAlt: 'Apex Home Insurance company office logo',
  targetUrl: 'https://example.com/apex-insurance',
};

export default function App() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Property Listings</h1>
      <SearchFilters onFilterChange={(f) => console.log(f)} />
      <SponsorBanner sponsor={sampleSponsor} />
      <section aria-label="Available Properties">
        <h2 className="sr-only">Properties List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}
