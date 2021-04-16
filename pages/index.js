import _ from 'lodash'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import SearchBar from 'components/SearchBar'
import { defaultUsers } from 'lib/constants'
import { useState } from 'react'
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		padding: '20px',
		backgroundColor: '#f5f5f5',
		'& > *': {
			margin: theme.spacing(2, 0)
		}
	}
}))

// eslint-disable-next-line react/prop-types
function Home () {
	const classes = useStyles()
	const [searchValue, setSearchValue] = useState('')

	return (
		<Container className={classes.root}>
			<SearchBar value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
			{defaultUsers.map((first_name, i) => { return <div key={i}> {first_name.first_name} </div> }) }



		</Container>
	)
}



export default Home

