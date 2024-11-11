import { useEffect } from 'react';

export interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  data?: any;
}

export default function ModalPopup({
  data,
  isOpen,
  onClose,
  children,
}: ModalPopupProps) {
  useEffect(() => {
    // Thêm sự kiện để đóng modal khi nhấn phím "Escape"
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;
  console.log(data);

  return (
    <div
      className="modal-overlay"
      onClick={onClose} // Đóng modal khi nhấn vào overlay
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Ngăn việc đóng modal khi nhấn vào nội dung bên trong
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          maxWidth: 'calc(100% - 64px - 64px)',
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}
