import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = "java", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 mb-4">
      {title && (
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
          <span className="text-sm font-mono text-gray-300">{title}</span>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-gray-200 transition-colors p-1"
            title="Copiar código"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className={`language-${language} text-sm text-gray-100 font-mono leading-relaxed`}>{code}</code>
      </pre>
    </div>
  );
}
