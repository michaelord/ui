import {Icon} from 'components/icon';
import {getModifiers} from 'components/libs';
import React, {memo} from 'react';
import './UIButton.scss';

import * as Types from 'components/types';

export type UIButtonProps = {
	size?: string;
	icon: Types.Children;
	title?: string;
	className?: string;
	onClick: (ev: React.MouseEvent) => void;
};

export const UIButton = memo((props: UIButtonProps) => {
	const base: string = 'ui-btn';

	const {onClick, className, title = undefined, icon, size} = props;

	const atts: object = {
		className: getModifiers(base, {size}) + `${className ? ` ${className}` : ''}`,
		type: 'button',
		onClick,
		title,
	};

	return (
		<button {...atts}>
			<Icon icon={icon} />
		</button>
	);
});
