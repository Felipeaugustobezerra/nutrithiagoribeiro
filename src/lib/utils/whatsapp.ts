interface CreateWhatsAppLinkParams {
  phone: string;
  message: string;
}

export function createWhatsAppLink({
  phone,
  message,
}: CreateWhatsAppLinkParams) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
