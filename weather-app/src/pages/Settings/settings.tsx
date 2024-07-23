
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { changeDaysAmount } from '../../store/slices/settings'
function Settings() {
  const count = useSelector((state: RootState) => state.settings.days)
  const dispatch = useDispatch()

  function handleChangeDays(e: React.ChangeEvent<HTMLInputElement>){
    const value = e.target.value
    dispatch(changeDaysAmount(+value))
  }
  return (
    <>
      <h2>nastroiki</h2>
      <input value={count} onChange={handleChangeDays}></input>
    </>
  );
}
export default Settings;
