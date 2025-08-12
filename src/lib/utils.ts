type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export const icons: Record<string, string> = {
	SQL: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
	bun: 'https://skillicons.dev/icons?i=bun',
	svelte: 'https://skillicons.dev/icons?i=svelte',
	tailwind: 'https://skillicons.dev/icons?i=tailwind',
	gmail: 'https://skillicons.dev/icons?i=gmail',
	github: 'https://skillicons.dev/icons?i=github',
	linkedin: 'https://skillicons.dev/icons?i=linkedin',
	telegram: 'https://img.icons8.com/?size=256&id=63306&format=png',
	UniPD: 'https://www.unipd.it/sites/unipd.it/files/logo-unipd.png',
	Go: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
	Redis:
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Fredis-logo.png&f=1&nofb=1&ipt=816c34a9c6e5aeccc8e18cba413a97c97615a20d86ca3fae90c62e8449e13d77',
	Maven:
		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F62a78cdae42d729d928b174f.png&f=1&nofb=1&ipt=26e588b4c92976d138ea733ee44b53f7699ab4e00167f549782d516956e3743c'
};
