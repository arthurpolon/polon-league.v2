import { IPaginationParams, usePagination } from 'hooks/use-pagination';
import ArrowLeft from 'public/arrow-left-icon.svg';

const Pagination = (props: IPaginationParams) => {
  const { range, next, previous, active, setPage } = usePagination(props);

  const renderButtons = () =>
    range.map((value, idx) => {
      if (value === 'dots') {
        return <span key={value + idx}>...</span>;
      }

      const isActive = active === value;

      return (
        <button
          key={value}
          type="button"
          className={`rounded w-9 h-9 border border-slate-300 transition-none ${
            isActive && 'text-white main-gradient border-0 font-medium'
          }`}
          onClick={() => setPage(value)}
        >
          {value}
        </button>
      );
    });

  return (
    <div className="flex gap-2">
      <button
        type="button"
        className="border border-slate-300 rounded w-9 h-9 relative"
        onClick={previous}
      >
        <ArrowLeft width={6} className="center-absolute" />
      </button>
      {renderButtons()}
      <button
        type="button"
        className="border border-slate-300 rounded w-9 h-9 relative"
        onClick={next}
      >
        <ArrowLeft width={6} className="center-absolute rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
