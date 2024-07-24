export function secondsToDate(dateSeconds: number) {
	const date = new Date(dateSeconds * 1000);
	const day = date.getDate();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
}
