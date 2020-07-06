import { takeLatest, call, put } from 'redux-saga/effects'

import { loadCourseDetailsSuccess } from './actions'

import { GET_COURSE_DETAILS } from './constants'

import { getCourseDetails } from '../../utils/service/courseService'

function* fetchCourseDetails() {
	try {
		const courseDetails = yield call(getCourseDetails)
		yield put(loadCourseDetailsSuccess(courseDetails))
	} catch (error) {
		// todo
	}
}

function* fetchCourseDetailsSaga() {
	yield takeLatest(GET_COURSE_DETAILS, fetchCourseDetails)
}

export default [fetchCourseDetailsSaga]
