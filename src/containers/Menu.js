import { connect } from 'react-redux'
import Menu from '../components/Menu'
import { fetchMakes, deleteMake } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
       makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: (makes) => dispatch(fetchMakes(makes)),
        deleteMake: (index) => dispatch(deleteMake(index))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Menu)