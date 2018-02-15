export default (theme: any) => ({
	'@global': {
		'.DayPicker': {
			display: 'inline-block',
		},

		'.DayPicker-wrapper': {
			position: 'relative',
			userSelect: 'none',
			flexDirection: 'row',
			outline: 0,
		},

		'.DayPicker-Months': {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			width: '100%',
		},
		
		'.DayPicker-Month': {
			display: 'table',
			borderSpacing: 0,
		},

		'.DayPicker-Month + .DayPicker-Month': {
			marginLeft: 20,
			paddingLeft: 17,
			borderLeft: '1px solid ' + theme.colors.base.greyLight,
		},

		'.DayPicker-NavBar': {
			position: 'relative',
		},

		'.DayPicker-NavButton': {
			display: 'block',
			position: 'absolute',
			top: 0,
			color: theme.palette.link.default.normal,
			cursor: 'pointer',

			'&:hover': {
				color: theme.palette.link.default.hover,
			},
		},

		'.DayPicker-NavButton--prev': {
			left: 5,
			transform: 'rotate(180deg)',
		},
		
		'.DayPicker-NavButton--next': {
			right: 0,
		},
		
		'.DayPicker-NavButton--interactionDisabled': {
			display: 'none',
		},
		
		'.DayPicker-Caption': {
			display: 'table-caption',
			textAlign: 'center',
			font: theme.fonts.primary.style.headerSmall,
		},
		
		'.DayPicker-Weekdays': {
			marginTop: 10,
			display: 'table-header-group',
		},
		
		'.DayPicker-WeekdaysRow': {
			display: 'table-row',
		},
		
		'.DayPicker-Weekday': {
			display: 'table-cell',
			padding: [5, 7],
			textAlign: 'right',
			textTransform: 'lowercase',
			font: theme.fonts.primary.style.paragraphExtraSmall,
		},

		'.DayPicker-Weekday--weekend': {
			color: theme.colors.base.red,
		},
		
		'.DayPicker-Weekday-abbr-title': {
			borderBottom: 'none',
			textDecoration: 'none',
		},
		
		'.DayPicker-Body': {
			display: 'table-row-group',
		},
		
		'.DayPicker-Week': {
			display: 'table-row',
		},
		
		'.DayPicker-Day': {
			display: 'table-cell',
			padding: [5, 7],
			textAlign: 'right',
			cursor: 'pointer',
			verticalAlign: 'middle',
			outline: 'none',
			border: '2px solid transparent',
			borderRadius: 5,

			'&:not(.DayPicker-Day--outside):hover': {
				backgroundOrigin: 'border-box',
				backgroundClip: 'border-box',
				backgroundImage: theme.palette.selectable.default.hover,
			},
		},
		
		'.DayPicker-WeekNumber': {
			display: 'table-cell',
			padding: 10,
			textAlign: 'right',
			verticalAlign: 'middle',
			minWidth: 15,
			cursor: 'pointer',
		},
		
		'.DayPicker--interactionDisabled--DayPicker-Day': {
			cursor: 'default',
		},
		
		'.DayPicker-Footer': {
			paddingTop: 10,
		},
		
		'.DayPicker-TodayButton': {
			border: 'none',
			backgroundImage: 'none',
			backgroundColor: 'transparent',
			boxShadow: 'none',
			cursor: 'pointer',
		},

		'.DayPicker-Day--today': {
			backgroundOrigin: ['padding-box', 'border-box'],
			backgroundClip: ['padding-box', 'border-box'],
			backgroundImage: ['linear-gradient(#fff, #fff)', theme.palette.selectable.default.hover],
		},

		'.DayPicker-Day--selected:not(.DayPicker-Day--outside)': {
			backgroundOrigin: 'border-box',
			backgroundClip: 'border-box',
			backgroundImage: theme.palette.selectable.default.hover,
		},

		'.DayPicker-Day--weekend, .DayPicker-Day--holiday': {
			color: theme.colors.base.red,
		},

		'.DayPicker-Day--workday': {
			color: theme.colors.base.black,
		},

		'.DayPicker-Day--disabled': {
			opacity: 0.4,
			cursor: 'default',
		},

		'.DayPicker-Range .DayPicker-Day--selected': {
			borderRadius: 0,
		},

		'.DayPicker-Range .DayPicker-Day--start': {
			borderRadius: [5, 0, 0, 5],
		},

		'.DayPicker-Range .DayPicker-Day--end': {
			borderRadius: [0, 5, 5, 0],
		},
	}
})