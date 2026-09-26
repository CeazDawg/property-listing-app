
import type { Sponsor } from '../types';


interface SponsorBannerProps {
  sponsor: Sponsor;
}

export const SponsorBanner: React.FC<SponsorBannerProps> = ({ sponsor }) => {
  return (
    <aside className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <img
          src={sponsor.imageUrl}
          alt={sponsor.imageAlt}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <span className="inline-block bg-amber-200 text-amber-900 text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wide mb-1">
            Sponsored
          </span>
          <h2 className="text-lg font-bold text-gray-900">{sponsor.businessName}</h2>
          <p className="text-sm text-gray-700">{sponsor.headline}</p>
        </div>
      </div>
      <a
        href={sponsor.targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto text-center bg-amber-600 text-white py-2 px-4 rounded-md font-medium hover:bg-amber-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 transition-colors"
        aria-label={`Visit sponsor ${sponsor.businessName}`}
      >
        Learn More
      </a>
    </aside>
  );
};
