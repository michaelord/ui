import React from 'react';
//import ScrollArea from 'react-scrollbar';
import './Scrollable.scss';

import * as Types from 'components/types';

export type ScrollableProps = {
	children?: Types.Children;
};

export const Scrollable = (props: ScrollableProps) => {
	const base: string = 'scrollable';
	const {children} = props;

	/*
	return (
		<ScrollArea
			speed={0.8}
			className={base}
			contentClassName={`${base}__content`}
			horizontal={false}
			smoothScrolling={true}
			stopScrollPropagation={true}
		>
			{children}
		</ScrollArea>
	);
	*/

	return null;
};
