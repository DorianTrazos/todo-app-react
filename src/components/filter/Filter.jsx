const Filter = ({ setFilterActive }) => {
  return (
    <div>
      <button onClick={() => setFilterActive('all')}>All</button>
      <button onClick={() => setFilterActive('active')}>Active</button>
      <button onClick={() => setFilterActive('completed')}>Completed</button>
    </div>
  );
};

export default Filter;
