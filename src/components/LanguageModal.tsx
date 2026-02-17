import { Modal } from './ui/Modal';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const languages = [
  { code: 'pt-BR', label: 'Português (Brasil)', flag: '🇧🇷' },
  { code: 'en-US', label: 'English (US)', flag: '🇺🇸' },
  { code: 'es-ES', label: 'Español', flag: '🇪🇸' },
  { code: 'fr-FR', label: 'Français', flag: '🇫🇷' },
  { code: 'de-DE', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja-JP', label: '日本語', flag: '🇯🇵' },
];

export function LanguageModal({
  isOpen,
  onClose,
  currentLanguage,
  onLanguageChange,
}: LanguageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Selecionar Idioma"
      size="md"
    >
      <div className="space-y-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              onLanguageChange(lang.code);
              onClose();
            }}
            className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
              currentLanguage === lang.code
                ? 'bg-slate-800 text-white'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
            }`}
          >
            <span className="text-2xl">{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
            {currentLanguage === lang.code && (
              <svg
                className="w-5 h-5 ml-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-200">
        <p className="text-sm text-blue-600">
          💡 <strong>Dica:</strong> Atualmente apenas Português está disponível.
          Contribua para traduzir para outros idiomas!
        </p>
      </div>
    </Modal>
  );
}
