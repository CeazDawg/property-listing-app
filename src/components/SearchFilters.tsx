import { useState } from 'react';
import type { FilterState } from '../types';


interface SearchFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    propertyType: '',
    maxPrice: '',
    beds: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 p-4 rounded-lg mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus-visible:ring-2 focus-visible:ring-indigo-500 bg-white"
          >
            <option value="">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
          </select>
        </div>

        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Rent
          </label>
          <select
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus-visible:ring-2 focus-visible:ring-indigo-500 bg-white"
          >
            <option value="">Any Price</option>
            <option value="1500">$1,500/mo</option>
            <option value="2500">$2,500/mo</option>
            <option value="3500">$3,500/mo</option>
          </select>
        </div>

        <div>
          <label htmlFor="beds" className="block text-sm font-medium text-gray-700 mb-1">
            Bedrooms
          </label>
          <select
            id="beds"
            name="beds"
            value={filters.beds}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus-visible:ring-2 focus-visible:ring-indigo-500 bg-white"
          >
            <option value="">Any Bedrooms</option>
            <option value="1">1+ Bed</option>
            <option value="2">2+ Beds</option>
            <option value="3">3+ Beds</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-colors"
      >
        Apply Filters
      </button>
    </form>
  );
};
