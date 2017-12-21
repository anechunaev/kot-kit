export function hashCode(data: string): string {
	if (data.length === 0) return '0';

	let n = 0;

	for (let i = 0; i < data.length; i++) {
		const char = data.charCodeAt(i);
		n = ((n << 5) - n) + char;
	}

	return (n & n).toString(16);
}

export function encodeQueryUrl(query: Dictionary<string>): string {
	let params = "";
	for (const key in query) {
		if (!query.hasOwnProperty(key)) {
			if (params != "") {
				params += "&";
			}
			params += key + "=" + encodeURIComponent(query[key]);
		}
	}

	return params;
}

export function sendGetRequest(url: string, query: Dictionary<string>, onSuccess: (data: string) => void) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			onSuccess(xhr.responseText);
		}
	}
	xhr.open('GET', url + '?' + encodeQueryUrl(query), true);
	xhr.send();
}