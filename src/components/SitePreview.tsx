import React, { useRef, useEffect } from 'react';

interface SitePreviewProps {
  htmlContent: string | null;
}

const SitePreview = ({ htmlContent }: SitePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (htmlContent && iframeRef.current) {
      const iframe = iframeRef.current;
      const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (iframeDocument) {
        iframeDocument.open();
        iframeDocument.write(htmlContent);
        iframeDocument.close();
      }
    }
  }, [htmlContent]);

  return (
    <div className="w-full border rounded-md overflow-hidden bg-white">
      {htmlContent ? (
        <iframe
          ref={iframeRef}
          title="Site Preview"
          className="w-full min-h-[400px] border-0"
          sandbox="allow-same-origin"
        />
      ) : (
        <div className="flex items-center justify-center min-h-[400px] bg-accent/50 text-muted-foreground">
          <p>Здесь появится предпросмотр после генерации сайта</p>
        </div>
      )}
    </div>
  );
};

export default SitePreview;
