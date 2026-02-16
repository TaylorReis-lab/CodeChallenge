import { Modal } from './ui/Modal';
import { Button } from './ui/Button';

interface ClearDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
}

export function ClearDataModal({ isOpen, onClose, onClear }: ClearDataModalProps) {
  const handleClear = () => {
    if (window.confirm('Tem certeza que deseja limpar todos os dados? Isso não pode ser desfeito.')) {
      onClear();
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Limpar Dados" size="sm">
      <div className="space-y-4">
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-medium text-amber-800">Ação irreversível</p>
              <p className="text-sm text-amber-600 mt-1">
                Ao limpar os dados, você perderá todo o seu progresso, incluindo:
              </p>
              <ul className="text-sm text-amber-600 mt-2 space-y-1 list-disc list-inside">
                <li>Desafios concluídos</li>
                <li>Medalhas conquistadas</li>
                <li>Configurações personalizadas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="danger" className="flex-1" onClick={handleClear}>
            Limpar Tudo
          </Button>
        </div>
      </div>
    </Modal>
  );
}
