import { Book } from '@/types';
import { BookCard } from './BookCard';

interface BookGridProps {
  books: Book[];
}

export function BookGrid({ books }: BookGridProps) {
  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg" style={{ color: '#6b7280' }}>Kitoblar topilmadi</p>
        <p className="mt-2" style={{ color: '#9ca3af' }}>
          Qidiruv so'zini o'zgartiring yoki filtrlarni tozalang
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
