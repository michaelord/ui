import {Icon} from 'components/icon';
import IconDown from 'components/icon/chevron-down.inline.svg';
import * as Utils from 'components/libs';
import {MenuDynamic} from 'components/navigation';
import * as Types from 'components/types';
import React, {memo, useState} from 'react';
import './Chooser.scss';

export type ChooserProps = {
	label?: Types.Text;
	items?: Array<any>;
	onChange?: (index: number) => void;
};

export const Chooser = memo((props: ChooserProps) => {
	const base: string = 'chooser';
	const {
		label = '[Select]',
		onChange,
		items = [
			{
				label: 'Item 1',
			},
			{
				label: 'Item 2',
			},
			{
				label: 'Item 3',
			},
		],
	} = props;

	const [lbl, setLabel] = useState(label);
	const [open, setOpen] = useState(false);

	const actions = items.map((item, index) => {
		// @ts-ignore
		item.onClick = () => {
			setLabel(items[index].label);
			setOpen(false);

			if (onChange) {
				onChange(index);
			}
		};

		return item;
	});

	const onClick = (ev: React.MouseEvent) => {
		ev.preventDefault();

		setOpen(!open);
	};

	const atts = {
		className: Utils.getModifiers(base, {
			active: open,
		}),
	};

	return (
		<div {...atts}>
			<button type="button" className={`${base}__trigger`} onClick={onClick}>
				<span>{lbl}</span>
				<Icon icon={IconDown} size="sm" />
			</button>
			<div className={`${base}__menu`}>
				<MenuDynamic items={actions} />
			</div>
		</div>
	);
});
