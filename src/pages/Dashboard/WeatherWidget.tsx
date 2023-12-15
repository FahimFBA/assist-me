import React from 'react';

const WeatherWidget = () => {
    return (
        <div className="weather-widget max-w-full overflow-hidden">
            <iframe
                className="w-full h-auto" // Set the width to full and height auto
                src="https://indify.co/widgets/live/weather/PzxXpmR4rUzJesOm7MLd"
                title="Weather Widget"
                frameBorder="0"
                style={{ minHeight: '200px' }} // Set a minimum height
            ></iframe>
        </div>
    );
};

export default WeatherWidget;


// 80% width
// import React from 'react';

// const WeatherWidget = () => {
//     return (
//         <div className="weather-widget max-w-full overflow-hidden flex justify-center">
//             <iframe
//                 className="w-4/5 h-auto" // Set the width to 80% and height auto
//                 src="https://indify.co/widgets/live/weather/PzxXpmR4rUzJesOm7MLd"
//                 title="Weather Widget"
//                 frameBorder="0"
//                 style={{ minHeight: '200px' }} // Set a minimum height
//             ></iframe>
//         </div>
//     );
// };

// export default WeatherWidget;
