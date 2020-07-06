import axios from 'axios'

const courseDetails = [
    { 
        type: 'On Track',
        data: [
            {
                title: 'CBSC: Grade 5 Maths - Algebra'
            },
            {
                title: 'CBSC: Grade 4 Maths - Algebra'
            },
            {
                title: 'CBSC: Grade 3 Maths - Algebra'
            },
            {
                title: 'CBSC: Grade 2 Maths - Algebra'
            },
        ]
    },
    { 
        type: 'Delayed',
        data: [
            {
                title: 'CBSC: Grade 5 English'
            },
            {
                title: 'CBSC: Grade 4 English'
            },
            {
                title: 'CBSC: Grade 3 English'
            },
            {
                title: 'CBSC: Grade 2 English'
            },
        ]
    },
    { 
        type: 'On Hold',
        data: [
            {
                title: 'CBSC: Grade 5 Science'
            },
            {
                title: 'CBSC: Grade 4 Science'
            },
            {
                title: 'CBSC: Grade 3 Science'
            },
            {
                title: 'CBSC: Grade 2 Science'
            },
        ]
    },
  ]

export function getCourseDetails() {
	return courseDetails;
	// return axios.get(
	// 	`https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/insta`,
	// 	{
	// 		headers: { 'Access-Control-Allow-Origin': '*' },
	// 		crossdomain: true
	// 	}
	// )
	// 	.then(response => response.data)
	// 	.catch(err => {
	// 		throw err
	// 	})
}
