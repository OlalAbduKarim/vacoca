import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  ArrowRight,
  Sliders,
} from 'lucide-react';

interface NewsStoriesViewProps {
  initialCategory?: string;
}

export const NewsStoriesView: React.FC<NewsStoriesViewProps> = ({ initialCategory = 'ALL' }) => {
  const { stories, setActiveStoryModal, setIsCMSOpen } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'ALL',
    'CAMPAIGNS',
    'COMMUNITY ACTION',
    'VOLUNTEER STORIES',
    'NEWS',
    'STATEMENTS',
    'EVENTS',
  ];

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const matchesCat = selectedCategory === 'ALL' || story.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        story.title.toLowerCase().includes(q) ||
        story.excerpt.toLowerCase().includes(q) ||
        story.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [stories, selectedCategory, searchQuery]);

  const featuredStory = stories.find((s) => s.featured) || stories[0];

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-[#1B4332]" />
              <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
                Civic Journalism & Movement Dispatches
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
              NEWS & <span className="text-[#1B4332]">STORIES</span>
            </h1>
            <p className="text-base text-gray-600 font-light">
              Grassroots investigations, campaign updates, community audit outcomes, official statements, and stories from frontline volunteers across Africa.
            </p>
          </div>

          <button
            onClick={() => setIsCMSOpen(true)}
            className="self-start md:self-auto px-5 py-3 bg-[#1A1A1A] hover:bg-[#1B4332] text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Manage in CMS</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured Article Showcase */}
        {featuredStory && selectedCategory === 'ALL' && !searchQuery && (
          <div
            onClick={() => setActiveStoryModal(featuredStory)}
            className="bg-white border border-gray-200 border-t-4 border-[#1B4332] cursor-pointer group shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-72 lg:h-[420px] overflow-hidden">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#1B4332] text-white font-mono-accent">
                    FEATURED STORY
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-mono-accent">
                    <span className="text-[#1B4332] font-bold uppercase">
                      {featuredStory.category}
                    </span>
                    <span>•</span>
                    <span>{featuredStory.date}</span>
                    <span>•</span>
                    <span>{featuredStory.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors leading-tight font-display uppercase">
                    {featuredStory.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                    {featuredStory.excerpt}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">By {featuredStory.author}</span>
                  <span className="text-xs font-bold text-[#1B4332] flex items-center gap-1 uppercase tracking-wider">
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 border border-gray-200 shadow-sm">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1B4332] text-white shadow-sm'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news & stories..."
              className="w-full bg-[#F9F9F7] border border-gray-300 pl-9 pr-4 py-2 text-xs text-[#1A1A1A] placeholder-gray-500 focus:outline-none focus:border-[#1B4332]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredStories.length === 0 ? (
          <div className="text-center py-16 bg-white border border-gray-200 text-gray-600">
            <p className="text-base font-semibold">No articles found in this category or search.</p>
            <p className="text-xs text-gray-500 mt-1">Try selecting "ALL" or changing your search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                onClick={() => setActiveStoryModal(story)}
                className="bg-white border border-gray-200 hover:border-[#1B4332] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-mono-accent font-bold uppercase tracking-wider bg-white/95 text-[#1B4332] border border-gray-200">
                        {story.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-mono-accent">
                      <span>{story.date}</span>
                      <span>•</span>
                      <span>{story.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#1B4332] transition-colors leading-snug font-display uppercase">
                      {story.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {story.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-[#1B4332] border-t border-gray-100 mt-2 uppercase tracking-wider">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
