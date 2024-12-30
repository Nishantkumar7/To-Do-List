import { ClipboardList } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-blue-600 p-8 shadow-lg">
      <div className="container mx-auto flex items-center justify-center">
        <ClipboardList className="h-10 w-10 text-white mr-4" />
        <h1 className="text-4xl font-bold text-white tracking-tight">To-Do List</h1>
      </div>
      <p className="text-center text-white/90 mt-2 text-sm font-medium">Organize your day, achieve your goals</p>
    </header>
  );
}
