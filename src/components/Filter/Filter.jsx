import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label, Input } from 'components/App.styled';

const FilterByName = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <Label>
        Find contact by name
        <Input type="text" onChange={changeFilter} />
      </Label>
    </>
  );
};

export default FilterByName;
