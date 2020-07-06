import { connect } from 'react-redux';
import App from '../../components/App'
import { loadCourseDetails } from './actions'

const mapStateToProps = state => ({
  courseDetails: state.getIn(['AppReducer', 'courseDetails'])
})

const mapDispatchToProps = dispatch => ({
  loadCourseDetails: () => dispatch(loadCourseDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
