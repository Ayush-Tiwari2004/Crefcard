import React, { useEffect, useRef } from 'react';

export const NotificationPopup = ({ show, onClose }) => {
    const popupRef = useRef(null);

    // Detect click outside to close the popup
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose(); // Close popup on outside click
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center md:items-start md:justify-end">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div
                ref={popupRef}
                className="relative mt-16 mx-4 md:mt-40 md:mr-64 w-[90%] md:w-[300px] min-h-[200px] text-white bg-slate-900 rounded-lg shadow-lg p-4 z-10"
            >
                <div className="flex flex-col gap-3">
                    <h2 className="text-base md:text-lg font-bold border-b border-gray-700 pb-2">
                        Notifications
                    </h2>
                    <div className="overflow-y-auto max-h-[300px]">
                        <p className="text-xs md:text-sm text-gray-300">
                            You have new notifications.
                        </p>
                        {/* Add more notification items here */}
                        <div className="mt-4 space-y-3">
                            {/* Example notification items */}
                            <div className="p-2 hover:bg-slate-800 rounded-md transition-colors">
                                <p className="text-xs md:text-sm">No new notifications</p>
                                <span className="text-[10px] md:text-xs text-gray-400">Just now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


