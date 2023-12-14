import { useEffect, useRef, useState, MouseEvent } from 'react';

interface Props {
    showTerms: boolean;
    onClose: () => void;
}

const Terms: React.FC<Props> = ({ showTerms, onClose }) => {
    const termsAndConditions = `
    By using AssistMe, you agree to the following terms and conditions.\n
    1. AssistMe provides tools for managing tasks and integrating Gmail accounts for email management.\n
    2. Users must be at least 13 years old to use the service.\n
    3. Users are responsible for maintaining the confidentiality of their accounts.\n
    4. The service may not be used for unlawful purposes.\n
    5. AssistMe reserves the right to suspend or terminate access to the service.\n
    6. These terms may be modified or replaced at any time. Users are responsible for reviewing changes.\n
    `;

    const termsRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(showTerms);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(showTerms);
    }, [showTerms]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (termsRef.current && !termsRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible, onClose]);

    const handleAnimationEnd = () => {
        if (isClosing) {
            setIsVisible(false);
            onClose();
        }
    };

    if (!isVisible) {
        return null; // Don't render if not visible
    }

    return (
        <div
            ref={termsRef}
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isClosing ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                } w-96 p-4 bg-gray-100 text-gray-800 rounded-md shadow-lg z-50 terms-box transition-transform transition-opacity duration-300 overflow-y-auto max-h-80`}
            onAnimationEnd={handleAnimationEnd}
        >
            <div className="flex justify-end">
                <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={onClose}
                >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <h2 className="text-lg font-semibold mb-2">Terms and Conditions</h2>
            <div className="text-sm text-left whitespace-pre-line">{termsAndConditions}</div>
        </div>
    );
};

export default Terms;
