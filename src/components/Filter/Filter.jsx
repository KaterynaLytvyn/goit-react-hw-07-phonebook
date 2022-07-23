import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from '../../redux/actions';


const Filter = () => {

    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    return (
        <label>
            Find contacts by name
            <input type="text" value={filter} onChange={event => dispatch(filterContacts(event.currentTarget.value))} />
        </label>
    )
}

export default Filter;