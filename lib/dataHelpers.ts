export function hashCode(data: string): string {
	if (data.length === 0) return '0';

	let n = 0;

	for (let i = 0; i < data.length; i++) {
		const char = data.charCodeAt(i);
		n = ((n << 5) - n) + char;
	}

	return (n & n).toString(16);
}