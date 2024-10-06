export function getInitials(fullName: string) {
  console.log(fullName);
  const nameParts = fullName?.split(" ");
  const firstNameInitial = nameParts[0][0];
  const lastNameInitial = nameParts[nameParts.length - 1][0];

  return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
}
