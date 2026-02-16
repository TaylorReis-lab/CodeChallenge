import { Modal } from './ui/Modal';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  editorTheme: 'dark' | 'light';
  onEditorThemeChange: (theme: 'dark' | 'light') => void;
}

export function SettingsModal({
  isOpen,
  onClose,
  editorTheme,
  onEditorThemeChange,
}: SettingsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Configurações" size="md">
      <div className="space-y-6">
        {/* Editor Theme */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">Tema do Editor</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
              <input
                type="radio"
                name="editorTheme"
                checked={editorTheme === 'dark'}
                onChange={() => onEditorThemeChange('dark')}
                className="w-4 h-4 text-slate-800"
              />
              <div className="flex items-center gap-3">
                <span className="text-xl">🌙</span>
                <div>
                  <p className="font-medium text-slate-800">Dracula OLED (Preto)</p>
                  <p className="text-xs text-slate-500">Tema escuro estilo VSCode Dracula</p>
                </div>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
              <input
                type="radio"
                name="editorTheme"
                checked={editorTheme === 'light'}
                onChange={() => onEditorThemeChange('light')}
                className="w-4 h-4 text-slate-800"
              />
              <div className="flex items-center gap-3">
                <span className="text-xl">☀️</span>
                <div>
                  <p className="font-medium text-slate-800">Claro (Branco)</p>
                  <p className="text-xs text-slate-500">Tema claro e minimalista</p>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* App Theme */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">Tema da Aplicação</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
              <input
                type="radio"
                name="appTheme"
                checked={true}
                className="w-4 h-4 text-slate-800"
              />
              <div className="flex items-center gap-3">
                <span className="text-xl">🎨</span>
                <div>
                  <p className="font-medium text-slate-800">Claro</p>
                  <p className="text-xs text-slate-500">Tema padrão da aplicação</p>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-start gap-3">
            <span className="text-xl">ℹ️</span>
            <div>
              <p className="font-medium text-blue-800">Sobre as configurações</p>
              <p className="text-sm text-blue-600 mt-1">
                Suas preferências são salvas automaticamente no navegador. 
                Você pode alterá-las a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
