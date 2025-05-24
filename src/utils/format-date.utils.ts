export const formatDateIndo = (isoDate: string): string => {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
};

export const formatDateTimeIndo = (isoDate: string): string => {
    const date = new Date(isoDate);
    const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
    };
    const time = date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return `${date.toLocaleDateString("id-ID", dateOptions)} ${time}`;
};
