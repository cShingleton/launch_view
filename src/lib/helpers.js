// collate all months from launches and order into respective months as an array of objects
export const monthReduction = (data) => {
  return data.reduce((acc, curr) => {
    // check acc for month
    const existingMonth = acc.filter(el => el[curr.launchMonth]);
    // if month exists...
    if (existingMonth.length > 0) {
      // map over els in acc array and check for month then push curr data
      acc.map((el) => {
        if (el[curr.launchMonth]) {
          el[curr.launchMonth].push({ ...curr });
        }
      });
    } else {
      // else create new entry in acc array for month and push curr data in
      acc.push({ [curr.launchMonth]: [{ ...curr }] });
    }
    return acc;
  }, []);
};
