export function addOfficeToList(existingList, officeToAdd) {
  let offices = existingList;
  offices.push({
    id: existingList.length+1,
    ...officeToAdd
  });
  return offices;
}

export function removeOfficeFromList(existingList, officeToRemove) {
  let offices = [];
  existingList.forEach((office) => {
    if (office.id !== officeToRemove.id) {
      offices.push(office);
    }
  });
  return offices;
}

export function getCompanyOffices(allOfficesList, companyId) {
  let offices = [];
  allOfficesList.forEach((office) => {
    if (office.companyId === companyId) {
      offices.push(office);
    }
  });
  return offices;
}