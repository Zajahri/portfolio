// DownloadButton.js
import React from 'react';

// eslint-disable-next-line react/prop-types
    export default function DownloadCV ({ fileName }) {
        const handleDownload = () => {
            const fileUrl = `/${fileName}`; // Using relative path
            const link = document.createElement('a');
            link.href = fileUrl;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
        
        return (
            <button onClick={handleDownload} className="cursor-pointer hover:text-yellow-300 hover:border-yellow-300 h-12 w-48 border-yellow-400 border-2 px-2 hover:bg-slate-900 text-yellow-400">
            <p>Download my Resume</p>
            </button>
        );
    }


