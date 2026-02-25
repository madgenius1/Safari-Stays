"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const showPages = pages.slice(
    Math.max(0, currentPage - 2),
    Math.min(totalPages, currentPage + 3)
  );

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-[#E8E3DB] hover:bg-[#FDFBF7] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      {/* First page */}
      {showPages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-4 py-2 rounded-lg border border-[#E8E3DB] hover:bg-[#FDFBF7] transition-colors"
          >
            1
          </button>
          {showPages[0] > 2 && <span className="px-2">...</span>}
        </>
      )}

      {/* Page numbers */}
      {showPages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            page === currentPage
              ? "bg-[#2D4032] text-white border-[#2D4032]"
              : "border-[#E8E3DB] hover:bg-[#FDFBF7]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last page */}
      {showPages[showPages.length - 1] < totalPages && (
        <>
          {showPages[showPages.length - 1] < totalPages - 1 && (
            <span className="px-2">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 rounded-lg border border-[#E8E3DB] hover:bg-[#FDFBF7] transition-colors"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-[#E8E3DB] hover:bg-[#FDFBF7] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  hasMore?: boolean;
}

export function LoadMoreButton({ onClick, isLoading = false, hasMore = true }: LoadMoreButtonProps) {
  if (!hasMore) return null;

  return (
    <div className="text-center mt-12">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="px-8 py-4 bg-white border-2 border-[#E8E3DB] rounded-full font-bold hover:border-[#C5A059] hover:bg-[#FDFBF7] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      {icon && <div className="mb-6 flex justify-center">{icon}</div>}
      <h3 className="text-2xl font-instrument-serif text-[#1A1A1A] mb-3">{title}</h3>
      <p className="text-[#1A1A1A]/70 mb-8 max-w-md mx-auto">{description}</p>
      {actionLabel && actionHref && (
        <a
          href={actionHref}
          className="inline-block bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08e4d] transition-colors"
        >
          {actionLabel}
        </a>
      )}
    </div>
  );
}

export function NoResults({ query }: { query?: string }) {
  return (
    <EmptyState
      icon={
        <div className="w-20 h-20 bg-[#E8E3DB] rounded-full flex items-center justify-center mx-auto">
          <span className="text-4xl">🔍</span>
        </div>
      }
      title={query ? `No results for "${query}"` : "No results found"}
      description="Try adjusting your filters or search terms to find what you're looking for."
      actionLabel="Clear Filters"
      actionHref="#"
    />
  );
}