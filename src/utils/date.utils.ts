import parseDate from "date-fns/parseISO";
import formatDateISO from "date-fns/formatISO";
import formatDate from "date-fns/format";
import isToday from "date-fns/isToday";
import isThisYear from "date-fns/isThisYear";

// Format patterns: https://date-fns.org/v2.21.1/docs/format

export const fDate = (value?: Date | string | null, format?: string) => {
  if (!value || !format) {
    return "";
  }

  try {
    let dt = value as Date;

    if (new Date(value).toString() !== "Invalid Date") {
      dt = new Date(value) as Date;
    } else if (typeof value === "string") {
      dt = parseDate(value) as Date;
    }

    return formatDate(dt, format);
  } catch (e) {
    console.log(e);
    return "";
  }
};

export const fDateTime = (value?: Date | string | null, format?: string) => {
  return fDate(value, format);
};

export const fDateTimeShort = (value?: Date | string | null) => {
  if (!value) {
    return "";
  }

  try {
    const dt = value instanceof Date ? value : parseDate(value);
    if (isToday(dt)) {
      return formatDate(dt, "HH:mm");
    } else if (isThisYear(dt)) {
      return formatDate(dt, "MMM d, HH:mm");
    }

    return formatDate(dt, "yyyy, MMM d, HH:mm");
  } catch {
    return "";
  }
};

export const fDateISO = (value?: Date | null) => {
  if (!value) {
    return "";
  }

  try {
    return formatDateISO(value);
  } catch {
    return "";
  }
};
