import React from 'react';

import styles from './styles.module.scss';
import LoadingIcon from './LoadingIcon';

const Loading = ({ text }) => {
	return (
		<div className={styles.wrapperLoading}>
			<LoadingIcon />
			<h3>{text}</h3>
		</div>
	);
};

export default Loading;
