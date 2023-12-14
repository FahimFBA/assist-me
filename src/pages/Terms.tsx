import React, { useEffect, useRef } from 'react';

const Terms = ({ showTerms, onClose }) => {
    const termsAndConditions = `
    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    5. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

    const termsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (termsRef.current && !termsRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (showTerms) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showTerms, onClose]);

    if (!showTerms) {
        return null; // Don't render if showTerms is false
    }

    return (
        <div ref={termsRef} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md shadow-lg z-50 terms-box">
            <div className="flex justify-end">
                <button className="text-white" onClick={onClose}>
                    X
                </button>
            </div>
            <h2 className="text-lg font-semibold mb-2">Terms and Conditions</h2>
            <p className="text-sm">{termsAndConditions}</p>
        </div>
    );
};

export default Terms;
