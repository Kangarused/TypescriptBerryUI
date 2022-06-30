import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export function parseDate(date: string | Date | undefined) {
    if (date != null) {
        if (typeof date === 'string' || date instanceof String) {
            date = dayjs(date).toDate();
        }
        return date;
    }
    return undefined;
}

export function formatDate(date: string | Date | undefined, nullText: string = ''): string {
    if (date != null) {
        return new Intl.DateTimeFormat('en-AU', { dateStyle: 'full', timeStyle: 'short' }).format(parseDate(date));
    }
    return nullText;
}

export function humanizeDiff(initialDate: string | Date, finalDate: string | Date) {
    const diff = dayjs(initialDate).diff(dayjs(finalDate));
    return dayjs.duration(diff).humanize(true);
}

