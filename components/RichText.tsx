// Renders **bold** markers inside plain-text content as highlighted spans.
export default function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return (
    <p className={className}>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </p>
  );
}
