export function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E8E3DB] animate-pulse">
      <div className="h-64 bg-[#E8E3DB]" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-[#E8E3DB] rounded w-3/4" />
        <div className="h-4 bg-[#E8E3DB] rounded w-1/2" />
        <div className="flex space-x-2">
          <div className="h-8 bg-[#E8E3DB] rounded-full w-20" />
          <div className="h-8 bg-[#E8E3DB] rounded-full w-24" />
        </div>
        <div className="h-4 bg-[#E8E3DB] rounded w-full" />
        <div className="h-4 bg-[#E8E3DB] rounded w-5/6" />
      </div>
    </div>
  );
}

export function PropertyDetailSkeleton() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-24 pb-20 animate-pulse">
      <div className="h-[60vh] bg-[#E8E3DB] mb-16" />
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="h-8 bg-[#E8E3DB] rounded w-1/2" />
            <div className="space-y-3">
              <div className="h-4 bg-[#E8E3DB] rounded w-full" />
              <div className="h-4 bg-[#E8E3DB] rounded w-full" />
              <div className="h-4 bg-[#E8E3DB] rounded w-3/4" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E3DB]">
              <div className="h-32 bg-[#E8E3DB] rounded mb-4" />
              <div className="h-12 bg-[#E8E3DB] rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E8E3DB] animate-pulse">
      <div className="h-56 bg-[#E8E3DB]" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-[#E8E3DB] rounded w-full" />
        <div className="h-4 bg-[#E8E3DB] rounded w-full" />
        <div className="h-4 bg-[#E8E3DB] rounded w-3/4" />
        <div className="flex items-center space-x-3 pt-4 border-t border-[#E8E3DB]">
          <div className="w-10 h-10 bg-[#E8E3DB] rounded-full" />
          <div className="flex-1">
            <div className="h-3 bg-[#E8E3DB] rounded w-1/2 mb-2" />
            <div className="h-3 bg-[#E8E3DB] rounded w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E8E3DB] animate-pulse">
      <div className="h-64 bg-[#E8E3DB]" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-[#E8E3DB] rounded w-3/4" />
        <div className="h-4 bg-[#E8E3DB] rounded w-full" />
        <div className="flex space-x-4">
          <div className="h-4 bg-[#E8E3DB] rounded w-20" />
          <div className="h-4 bg-[#E8E3DB] rounded w-24" />
        </div>
      </div>
    </div>
  );
}

export function DestinationCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E8E3DB] animate-pulse">
      <div className="h-72 bg-[#E8E3DB]" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-[#E8E3DB] rounded w-2/3" />
        <div className="h-4 bg-[#E8E3DB] rounded w-full" />
        <div className="flex flex-wrap gap-2">
          <div className="h-6 bg-[#E8E3DB] rounded-full w-20" />
          <div className="h-6 bg-[#E8E3DB] rounded-full w-24" />
          <div className="h-6 bg-[#E8E3DB] rounded-full w-16" />
        </div>
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 6, type = "property" }: { count?: number; type?: "property" | "blog" | "experience" | "destination" }) {
  const SkeletonComponent = {
    property: PropertyCardSkeleton,
    blog: BlogCardSkeleton,
    experience: ExperienceCardSkeleton,
    destination: DestinationCardSkeleton,
  }[type];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  );
}