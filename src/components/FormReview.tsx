import { useEffect, useState } from "react";

export default function NuvisionForm() {
  const [loaded, setLoaded] = useState(false);
  // Use the explicit iframe id provided so the embed script can target it
  const iframeId = "inline-YjkqvHE1XCUyroxu4265";

  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const SRC = "https://link.inkshapecrm.com/js/form_embed.js";
    // Avoid injecting the script multiple times
    let addedByUs = false;
    let script = document.querySelector(
      `script[src="${SRC}"]`
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.src = SRC;
      script.async = true;
      script.setAttribute("data-inkshape-embed", "1");
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
        position: "relative",
        width: "100%",
        height: "490px", // Altura para reservar espacio
        padding: 0,
        overflow: "hidden",
      }}
      className="bg-[#0A2A59]"
    >
      {!loaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
          }}
        >
          Cargando…
        </div>
      )}

      <iframe
        id={iframeId}
        src="https://link.inkshapecrm.com/widget/form/YjkqvHE1XCUyroxu4265"
        title="Form Reviews"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: 3,
          background: "transparent",
          padding: 0,
          overflow: "hidden",
        }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form Reviews"
        data-height="466"
        data-layout-iframe-id={iframeId}
        data-form-id="YjkqvHE1XCUyroxu4265"
      />
    </div>
  );
}
