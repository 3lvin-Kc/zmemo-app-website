import React from 'react';
import { Users, Database, Star } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-zinc-500">
            <Users size={16} />
            <span className="text-sm font-medium">Built with Rust + SQLite</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <Database size={16} />
            <span className="text-sm font-medium">FTS5 Full-Text Search</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <Star size={16} className="text-yellow-500" />
            <span className="text-sm font-medium">Read-only Gmail Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};
