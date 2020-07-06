import {
	GET_COURSE_DETAILS,
	GET_COURSE_DETAILS_SUCCESS
} from './constants'

export const loadCourseDetailsSuccess = courseDetails => ({
	type: GET_COURSE_DETAILS_SUCCESS,
	courseDetails
})

export const loadCourseDetails = () => ({
	type: GET_COURSE_DETAILS
})
