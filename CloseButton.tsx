import {Icon} from 'components/icon';
import IconCross from 'components/icon/cross.inline.svg';
import {getModifiers} from 'components/libs';
import React, {memo} from 'react';
import './UIButton.scss';

import * as Types from 'components/types';

type Props = {
	title?: string;
	className?: Types.ClassName;
	onClick: (ev: React.MouseEvent) => void;
};

export const CloseButton = memo((props: Props) => {
	const base: string = 'ui-btn';

	const {onClick, className, title = undefined} = props;

	const atts: object = {
		className: getModifiers(base, {}) + `${className ? ` ${className}` : ''}`,
		type: 'button',
		onClick,
		title,
	};

	return (
		<button {...atts}>
			<Icon icon={IconCross} />
		</button>
	);
});
