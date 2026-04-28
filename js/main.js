// ===== PRIORITAS CREATIVO - main.js =====

document.addEventListener('DOMContentLoaded', () => {

  // ---- MODAL ----
  const overlay = document.getElementById('shareModal');
  const openBtn = document.getElementById('shareBtn');
  const closeBtn = document.getElementById('closeModal');

  openBtn?.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ---- COPY LINK ----
  window.copyLink = function () {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      showToast('¡Enlace copiado!');
    }).catch(() => {
      // fallback
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      showToast('¡Enlace copiado!');
    });
  };

  // ---- DOWNLOAD QR ----
  window.downloadQR = function () {
    const link = document.createElement('a');
    link.href = 'imagenes/qr_contact.png';
    link.download = 'Prioritas_Creativo_QR.png';
    link.click();
  };

  // ---- WHATSAPP SHARE ----
  window.shareWhatsApp = function () {
    const text = encodeURIComponent('¡Conoce Prioritas Creativo! Diseño + Impresión + Multimedia = Éxito Visual\n📞 +593 984 853 643\n🌐 https://sl1nk.com/8lqgult');
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  // ---- TOAST ----
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.textContent = msg;
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      background: 'linear-gradient(135deg, #00b4d8, #7b2d8b)',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '100px',
      fontSize: '0.85rem',
      fontWeight: '600',
      zIndex: '9999',
      opacity: '0',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      fontFamily: 'Outfit, sans-serif',
      letterSpacing: '0.5px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // ---- CONTACT ITEMS HOVER RIPPLE ----
  document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function () {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => this.style.transform = '', 150);
    });
  });

});
