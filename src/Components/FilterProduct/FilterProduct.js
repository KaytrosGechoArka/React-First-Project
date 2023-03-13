import './FilterProduct.css'
let FilterProduct=(props)=>{
function onFilterValueChanged(event){

    props.filterValueSelected(event.target.value);

}

    return(
        <div className="filter-area">
            <select name="isAvailable" id="" onChange={onFilterValueChanged}>
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavaliable</option>
            </select>
        </div>
    );
}
export default FilterProduct ;