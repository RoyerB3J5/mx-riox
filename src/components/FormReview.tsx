import { useEffect, useId, useState } from 'react';

export default function NuvisionForm() {
  const [loaded, setLoaded] = useState(false);
  const iframeId = useId();

  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined' || typeof document === 'undefined')
      return;

    const SRC = 'https://link.capitileandstone.com/js/form_embed.js';
    // Avoid injecting the script multiple times
    let addedByUs = false;
    let script = document.querySelector(
      `script[src="${SRC}"]`
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.src = SRC;
      script.async = true;
      script.setAttribute('data-capitile-embed', '1');
      document.body.appendChild(script);
      addedByUs = true;
    }

    return () => {
      if (addedByUs && script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '490px', // Altura específica basada en data-height
        padding: 0,
        overflow: 'hidden', // Oculta cualquier contenido que se desborde
      }}
      className="bg-[#0A2A59]"
    >
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
          }}
        >
          Cargando…
        </div>
      )}
      <iframe
        id={iframeId}
        src="https://link.capitileandstone.com/widget/form/oxuQDQ0Pt7oGe0NpPE4w"
        title="Form Reviews"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '466px',
          border: 'none',
          borderRadius: 3,
          background: 'transparent',
          padding: 0,
          overflow: 'hidden', // Oculta el scroll interno del iframe
        }}
        // Note: 'scrolling' is non-standard and can cause React warnings; use CSS overflow to control scroll
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Form Reviews"
        data-height="466"
        data-layout-iframe-id={iframeId}
        data-form-id="oxuQDQ0Pt7oGe0NpPE4w"
      />
    </div>
  );
}
