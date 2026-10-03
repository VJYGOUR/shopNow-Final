function ErrorMessage({ message, title = "something went wrong" }) {
  if (!message) return null;
  return (
    <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
        !
      </span>

      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-red-600">{message}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
