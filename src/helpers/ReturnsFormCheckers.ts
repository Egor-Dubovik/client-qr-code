interface IcheckReturnFormParams {
  name: string;
  country: string;
  agreement: boolean;
  city: string;
  zip: string;
  adress: string;
  image: File | null;
  reasonReturn: string;
}

export const checkReturnForm = (params: IcheckReturnFormParams): string[] => {
  const { name, country, agreement, city, zip, adress, image, reasonReturn } = params;
  const errorMessage = [] as string[];

  if (name.split(' ').length < 3) errorMessage.push('*Введите ФИО через пробелы');
  if (country === '') errorMessage.push('*Не указана страна');
  if (!agreement) errorMessage.push('*Примите соглашение');
  if (city === '') errorMessage.push('*Введите город');
  if (zip === '') errorMessage.push('*Введите почтовый код');
  if (adress === '') errorMessage.push('*Введите адресс');
  if (!image) errorMessage.push('*Необходимо приложить фото возвращаемой продукции');
  if (reasonReturn === '') errorMessage.push('*Укажите причину возврата');
  return errorMessage;
};
