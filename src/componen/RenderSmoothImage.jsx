import React from 'react';
import '../App.css';

function RenderSmoothImage({ src, alt, className }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
      <img
          src={src}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          className={`${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity  ${className}`}
      />
  );
}

export default RenderSmoothImage;
