export type Dealer = {
  name: string;
  address: string;
  phone: string;
  whatsappService?: string;
  whatsappSales?: string;
  whatsappBooking?: string;
  mapUrl: string;
};

export const dealers: Dealer[] = [
  {
    name: "Banjarbaru",
    address: "Jl. A. Yani Km. 22 Landasan Ulin",
    phone: "05114705800",
    whatsappService: "6281262699800",
    whatsappSales: "6282168899800",
    mapUrl:
      "https://maps.app.goo.gl/vC2nXJWirRTAc33E8",
  },
  {
    name: "Batulicin",
    address: "Jl. Raya Batulicin RT. 13/03, Batulicin, Tanah Bumbu",
    phone: "051875800",
    whatsappService: "6285251396800",
    whatsappSales: "6281253918000",
    mapUrl:
      "https://maps.app.goo.gl/Gtf6oG1Un4KX5ipWA",
  },
  {
    name: "Banjarmasin",
    address: "Jl. Gub. Soebardjo RT. 13 Basirih",
    phone: "05116778000",
    whatsappBooking: "6285280887800",
    mapUrl:
      "https://maps.app.goo.gl/YNTMD4Juuz9tGaig7",
  },
];
