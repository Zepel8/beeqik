export const SITE = {
  name: "Beeqik",
  domain: "beeqik.com",
  url: "https://beeqik.com",
  tagline: "Reliable China Sourcing Without the Alibaba Headache",
  description:
    "Work directly with verified China suppliers through Beeqik. Fast samples, competitive pricing, custom packaging, and a trusted sourcing partner with years of factory experience.",
  email: "lu@beeqik.com",
  phone: "+8618665918576",
  phoneDisplay: "+86 186 6591 8576",
  whatsapp: "8618665918576",
  wechat: "+8618665918576",
};

export const whatsappLink = (msg = "Hi Beeqik, I'd like a sourcing quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const mailtoLink = (subject = "Sourcing inquiry") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;

export const telLink = `tel:${SITE.phone}`;
