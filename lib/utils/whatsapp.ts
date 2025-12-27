import { CONTACT } from "@/lib/constants";

/**
 * Gera URL do WhatsApp com mensagem pré-preenchida
 */
export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodedMessage}`;
}

/**
 * Mensagens padrão para WhatsApp
 */
export const WHATSAPP_MESSAGES = {
  schedule: "Olá! Gostaria de agendar uma consulta.",
  evaluation: "Olá! Vi o site e gostaria de agendar uma avaliação.",
  info: "Olá! Gostaria de mais informações sobre os serviços.",
} as const;
