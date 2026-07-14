import React from 'react';

export default function SkeletonLoader({ rows = 3, height = "h-48" }) {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 rounded-2xl bg-theme-surface/30 border border-theme/50 backdrop-blur-md animate-pulse">
      <div className="flex flex-col gap-4">
        {/* Header Skeleton */}
        <div className="h-6 w-1/4 bg-primary/20 rounded-md mb-4" />
        <div className="h-10 w-2/3 bg-theme-surface/80 rounded-lg mb-8" />
        
        {/* Body Rows / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className={`flex flex-col gap-3 p-6 rounded-xl border border-theme/30 bg-theme-surface/50 ${height}`}>
              <div className="h-6 w-1/3 bg-theme-surface/80 rounded-md" />
              <div className="h-4 w-full bg-theme-surface/60 rounded-sm mt-2" />
              <div className="h-4 w-5/6 bg-theme-surface/60 rounded-sm" />
              <div className="h-4 w-4/6 bg-theme-surface/60 rounded-sm" />
              <div className="mt-auto flex gap-2">
                <div className="h-6 w-12 bg-theme-surface/80 rounded-full" />
                <div className="h-6 w-12 bg-theme-surface/80 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
