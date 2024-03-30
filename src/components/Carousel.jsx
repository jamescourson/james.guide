const carouselStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  gap: '1em'
}

const Carousel = ({ label, items }) => {
  return (
    <div style={carouselStyles}>
      <span>{label}</span>
      <div style={{ display: 'flex', flexFlow: 'row no-wrap' }}>
        {...items}
      </div>
    </div>
  );
}

export default Carousel;
