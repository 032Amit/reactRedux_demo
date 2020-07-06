import { fromJS } from 'immutable'
import { GET_COURSE_DETAILS_SUCCESS } from './constants'
const initialState = fromJS({
	courseDetails: '',
})

/* eslint-disable no-fallthrough */
function AppReducer(state = initialState, action) {
	switch (action.type) {
		case GET_COURSE_DETAILS_SUCCESS:
			return state
				.set('courseDetails', action.courseDetails)

		default:
			return state
	}
}
/* eslint-enable no-fallthrough */

export default AppReducer
