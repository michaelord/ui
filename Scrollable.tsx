import * as React from 'react';

import ScrollArea from 'react-scrollbar';

import './Scrollable.scss';

type Props = {
	children?: React.ReactNode;
};

export const Scrollable = (props: Props) => {
	const base: string = 'scrollable';
	const {children} = props;

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
};
