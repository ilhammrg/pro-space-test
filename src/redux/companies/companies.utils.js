export function addCompanyToList(existingList, companyToAdd) {
  let companies = existingList;
  companies.push({
    id: existingList.length+1,
    ...companyToAdd
  });
  return companies;
}

export function removeCompanyFromList(existingList, companyToRemove) {
  let companies = [];
  existingList.forEach((company) => {
    if (company.id !== companyToRemove.id) {
      companies.push(company);
    }
  });
  return companies;
}

export function getOneCompany(existingList, companyId) {
  let currentCompany = {};
  existingList.forEach((company) => {
    if (companyId === company.id) {
      currentCompany = company;
    }
  });
  return currentCompany;
}