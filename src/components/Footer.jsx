export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-5 py-8 dark:border-slate-800 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} Md Tanjirul Islam.</p>
        <p className="font-mono">Built with React, Tailwind, and Framer Motion.</p>
      </div>
    </footer>
  );
}
