import React from 'react';

// Styles
import styles from './styles.module.scss';

const Navbar = ({ clearAll }) => {
	return (
		<div className={styles.wrapperNavbar}>
			<h3>githubstars</h3>
			<h4 onClick={clearAll}>Home</h4>
		</div>
	);
};

export default Navbar;
