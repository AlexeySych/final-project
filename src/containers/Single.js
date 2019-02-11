import { connect } from 'react-redux';
import Single from '../components/Single';
import fetchSingle from '../actions/fetchSingle';

const mapStateToProps = (state) => ({
    data: state,
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingle: (pokemon) => {
            dispatch(fetchSingle(pokemon))
        },
    }
}

const SingleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Single);

export default SingleContainer;