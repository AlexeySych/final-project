import { connect } from 'react-redux';
import Single from '../components/Single';
import fetchSingle from '../actions/fetchSingle';
import clearSingle from '../actions/clearSingle';

const mapStateToProps = (state) => ({
    data: state,
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingle: (pokemon) => {
            dispatch(fetchSingle(pokemon))
        },
        clearSingle: () => {
            dispatch(clearSingle())
        },
    }
}

const SingleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Single);

export default SingleContainer;