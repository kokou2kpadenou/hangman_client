import _ from "lodash";

export const dateFormating = (date) => {
  return date ? new Date(date).toDateString().slice(4) : "";
};

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
