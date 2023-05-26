const DivisionTitle = ({ division, typeOf }) => {
  return (
    <div className="typeTitle">
      <h2>
        {division} {typeOf}
      </h2>
    </div>
  );
};

export default DivisionTitle;
