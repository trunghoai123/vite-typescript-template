import './_3d-app.scss';
import { useEffect, useRef } from 'react';
import puzzles from '../../utils/Puzzles';

const V3DApp = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        window.addEventListener('message', function (e) {
            if (e.data === 'v3d_loaded' && iframeRef.current) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                puzzles.setProcedures(iframeRef.current.contentWindow?.v3d?.puzzles.procedures);
                iframeRef.current.focus();
            }
        });
        return () => {
            puzzles.setProcedures(null);
        };
    }, []);

    return (
        <div id="v3d-viewer" className="v3d-viewer">
            <div className="iframe-container">
                <iframe
                    src="./assets/models/epsan/index.html"
                    title="3d-viewer"
                    ref={iframeRef}
                ></iframe>
            </div>
        </div>
    );
};

export default V3DApp;
