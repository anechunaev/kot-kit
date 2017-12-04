export type RGB = {
	r: number,
	g: number,
	b: number,
};
export type RGBA = {
	r: number,
	g: number,
	b: number,
	a?: number,
};
export type HEX = string;

export function rgb(r: number, g: number, b: number): RGB {
	const val = (n: number) => n > 0 ? n < 256 ? n : 0 : 0;
	const color = { r: val(r), g: val(g), b: val(b) };
	color.toString = () => rgbToHex(color);
	return color;
}

export function rgba(r: number, g: number, b: number, a: number = 1): RGBA {
	const val = (n: number) => n > 0 ? n < 256 ? n : 0 : 0;
	const color = { r: val(r), g: val(g), b: val(b), a: a > 0 ? a < 1 ? a : 1 : 1 };
	color.toString = () => `rgba(${r},${g},${b},${a})`;
	return color;
}

export function hex(s: string, startWithNumberSign: boolean = true): HEX {
	const pad = (str: string) => startWithNumberSign ? '#' + str : str;

	if (!/(^#?[0-9A-F]{6}$)|(^#?[0-9A-F]{3}$)/i.test(s)) return pad('000000');

	const base = (s.match(/^#?(.*)/) || [,''])[1] || '';

	if (base.length < 3) {
		return pad('000000');
	}

	if (base.length < 6) {
		return pad(`${base[0]}${base[0]}${base[1]}${base[1]}${base[2]}${base[2]}`).toUpperCase();
	}

	return pad(base).toUpperCase();
}

export function rgbToHex(color: RGB): HEX {
	const conv = (c: number) => ('00' + c.toString(16)).slice(-2);
	return (`#${conv(color.r)}${conv(color.g)}${conv(color.b)}`).toUpperCase();
}

export function hexToRgb(color: HEX): RGB {
	let bigint;
	const base = [(bigint = parseInt(hex(color, false), 16)) >> 16 & 255, bigint >> 8 & 255, bigint & 255];

	return {
		r: base[0],
		g: base[1],
		b: base[2],
	}
}

export function fade(color: HEX | RGB | RGBA, factor: number): RGBA {
	const val = factor > 0 ? factor < 1 ? factor : 1 : 1;

	if (typeof color === 'string') {
		const c = hexToRgb(hex(color));
		return rgba(c.r, c.g, c.b, val);
	}

	if (typeof color.r !== 'undefined' && typeof color.g !== 'undefined' && typeof color.b !== 'undefined') {
		return rgba(color.r, color.g, color.b, factor);
	}

	return rgba(0, 0, 0, factor);
}