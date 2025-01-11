export const getDayName = (date: Date = new Date()): string =>
    date.toLocaleDateString(undefined, { weekday: "long" });

export const getFormattedDate = (date: Date = new Date()): string =>
    date.toLocaleDateString("en-GB");

export const getLocalDateString = (date: Date = new Date()): string =>
    date.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

export const getDateAndMonth = (date: Date = new Date()): string =>
    date.toLocaleDateString(undefined, { day: "2-digit", month: "short" });
