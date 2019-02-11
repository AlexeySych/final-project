import { connect } from 'react-redux';
import Caught from '../components/Caught';
import fetchCaught from '../actions/fetchCaught';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCaught: () => {
            dispatch(fetchCaught())
        },
    }
}

const mapStateToProps = (state) => ({
    data: state,
})

const CaughtContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Caught);

export default CaughtContainer;