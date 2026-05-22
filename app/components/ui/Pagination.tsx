"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-bold text-zinc-500 transition hover:border-[#6bd334] hover:text-[#6bd334] disabled:cursor-not-allowed disabled:opacity-40"
      >
        ←
      </button>

      {pages.map((page) => {
        const active = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange?.(page)}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-black transition ${
              active
                ? "bg-[#6bd334] text-white"
                : "border border-zinc-200 bg-white text-zinc-700 hover:border-[#6bd334] hover:text-[#6bd334]"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-bold text-zinc-500 transition hover:border-[#6bd334] hover:text-[#6bd334] disabled:cursor-not-allowed disabled:opacity-40"
      >
        →
      </button>
    </div>
  );
}