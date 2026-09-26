export interface Property {
    id: string;
    title: string;
    address: string;
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    imageUrl: string;
    imageAlt: string;
  }
  
  export interface Sponsor {
    id: string;
    businessName: string;
    headline: string;
    imageUrl: string;
    imageAlt: string;
    targetUrl: string;
  }
  
  export interface FilterState {
    propertyType: string;
    maxPrice: string;
    beds: string;
  }
  