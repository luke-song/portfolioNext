import MovingComponent from 'react-moving-text';
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{' '}
      <MovingComponent
        type="typewriter"
        dataText={['Luke Song', 'a Front End Engineer']}
      />
    </h1>
  );
};
export default AnimationText;
