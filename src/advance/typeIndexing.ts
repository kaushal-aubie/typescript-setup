export interface Owner {
  business: string;
  customer: string[];
}

const businessName: Owner["business"] = "aubergine";
