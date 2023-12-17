import { IsArray, IsNumber, IsString } from 'class-validator';

export class PushMenuRequest {
  @IsString()
  success: string;
  @IsArray()
  restaurants: Restaurant[];
  @IsArray()
  ordertypes: Ordertype[];
  @IsArray()
  categories: Category[];
  @IsArray()
  parentcategories: any[];
  @IsArray()
  items: Item[];
  @IsArray()
  variations: Variation2[];
  @IsArray()
  addongroups: Addongroup[];
  @IsArray()
  attributes: Attribute[];
  @IsArray()
  discounts: Discount[];
  @IsArray()
  taxes: Tax[];
  @IsString()
  serverdatetime: string;
  @IsString()
  db_version: string;
  @IsString()
  application_version: string;
  @IsNumber()
  http_code: number;
}

class Restaurant {
  @IsString()
  restaurantid: string;
  @IsString()
  active: string;
  details: Details;
}

class Details {
  @IsString()
  menusharingcode: string;
  @IsString()
  currency_html: string;
  @IsString()
  country: string;
  @IsArray()
  images: any[];
  @IsString()
  restaurantname: string;
  @IsString()
  address: string;
  @IsString()
  contact: string;
  @IsString()
  latitude: string;
  @IsString()
  longitude: string;
  @IsString()
  landmark: string;
  @IsString()
  city3: string;
  @IsString()
  state: string;
  @IsString()
  minimumorderamount: string;
  @IsString()
  minimumdeliverytime: string;
  @IsString()
  deliverycharge: string;
  @IsString()
  deliveryhoursfrom1: string;
  @IsString()
  deliveryhoursto1: string;
  @IsString()
  deliveryhoursfrom2: string;
  @IsString()
  deliveryhoursto2: string;
  @IsString()
  sc_applicable_on: string;
  @IsString()
  sc_type: string;
  @IsString()
  sc_calculate_on: string;
  @IsString()
  sc_value: string;
  @IsString()
  tax_on_sc: string;
  @IsNumber()
  calculatetaxonpacking: number;
  @IsString()
  pc_taxes_id: string;
  @IsNumber()
  calculatetaxondelivery: number;
  @IsString()
  dc_taxes_id: string;
  @IsString()
  packaging_applicable_on: string;
  @IsString()
  packaging_charge: string;
  @IsString()
  packaging_charge_type: string;
}

class Ordertype {
  @IsNumber()
  ordertypeid: number;
  @IsString()
  ordertype: string;
}

class Category {
  @IsString()
  categoryid: string;
  @IsString()
  active: string;
  @IsString()
  categoryrank: string;
  @IsString()
  parent_category_id: string;
  @IsString()
  categoryname: string;
  @IsString()
  categorytimings: string;
  @IsString()
  category_image_url: string;
}

class Item {
  @IsString()
  itemid: string;
  @IsString()
  itemallowvariation: string;
  @IsString()
  itemrank: string;
  @IsString()
  item_categoryid: string;
  @IsString()
  item_ordertype: string;
  @IsString()
  item_packingcharges: string;
  @IsString()
  itemallowaddon: string;
  @IsString()
  itemaddonbasedon: string;
  @IsString()
  item_favorite: string;
  @IsString()
  ignore_taxes: string;
  @IsString()
  ignore_discounts: string;
  @IsString()
  in_stock: string;
  @IsString()
  @IsArray()
  cuisine: string[];
  @IsString()
  variation_groupname: string;
  @IsArray()
  variation: Variation[];
  @IsArray()
  addon: Addon[];
  @IsString()
  itemname: string;
  @IsString()
  item_attributeid: string;
  @IsString()
  itemdescription: string;
  @IsString()
  minimumpreparationtime: string;
  @IsString()
  price: string;
  @IsString()
  active: string;
  @IsString()
  item_image_url: string;
  @IsString()
  item_tax: string;
  @IsString()
  gst_type: string;
  nutrition: Nutrition;
}

class Variation {
  @IsString()
  id: string;
  @IsString()
  variationid: string;
  @IsString()
  name: string;
  @IsString()
  groupname: string;
  @IsString()
  price: string;
  @IsString()
  active: string;
  @IsString()
  item_packingcharges: string;
  @IsString()
  variationrank: string;
  @IsArray()
  addon: any[];
  @IsNumber()
  variationallowaddon: number;
}

class Addon {
  @IsString()
  addon_group_id: string;
  @IsString()
  addon_item_selection_min: string;
  @IsString()
  addon_item_selection_max: string;
}

class Nutrition {
  additiveMap?: AdditiveMap;
  @IsArray()
  allergens?: Allergen[];
  foodAmount?: FoodAmount;
  calories?: Calories;
  protien?: Protien;
  @IsArray()
  minerals?: Mineral[];
  sodium?: Sodium;
  carbohydrate?: Carbohydrate;
  totalSugar?: TotalSugar;
  addedSugar?: AddedSugar;
  totalFat?: TotalFat;
  saturatedFat?: SaturatedFat;
  transFat?: TransFat;
  cholesterol?: Cholesterol;
  @IsArray()
  vitamins?: Vitamin[];
  additionalInfo?: AdditionalInfo;
  fiber?: Fiber;
  @IsString()
  servingInfo?: string;
}

class AdditiveMap {
  Polyols: Polyols;
}

class Polyols {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class Allergen {
  @IsString()
  allergen: string;
  @IsString()
  allergenDesc: string;
}

class FoodAmount {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class Calories {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class Protien {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class Mineral {
  @IsString()
  name: string;
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class Sodium {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class Carbohydrate {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class TotalSugar {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class AddedSugar {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class TotalFat {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class SaturatedFat {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class TransFat {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class Cholesterol {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class Vitamin {
  @IsString()
  name: string;
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class AdditionalInfo {
  @IsString()
  info: string;
  @IsString()
  remark: string;
}

class Fiber {
  @IsNumber()
  amount: number;
  @IsString()
  unit: string;
}

class Variation2 {
  @IsString()
  variationid: string;
  @IsString()
  name: string;
  @IsString()
  groupname: string;
  @IsString()
  status: string;
}

class Addongroup {
  @IsString()
  addongroupid: string;
  @IsString()
  addongroup_rank: string;
  @IsString()
  active: string;
  @IsArray()
  addongroupitems: Addongroupitem[];
  @IsString()
  addongroup_name: string;
}

class Addongroupitem {
  @IsString()
  addonitemid: string;
  @IsString()
  addonitem_name: string;
  @IsString()
  addonitem_price: string;
  @IsString()
  active: string;
  @IsString()
  attributes: string;
  @IsString()
  addonitem_rank: string;
}

class Attribute {
  @IsString()
  attributeid: string;
  @IsString()
  attribute: string;
  @IsString()
  active: string;
}

class Discount {
  @IsString()
  discountid: string;
  @IsString()
  discountname: string;
  @IsString()
  discounttype: string;
  @IsString()
  discount: string;
  @IsString()
  discountordertype: string;
  @IsString()
  discountapplicableon: string;
  @IsString()
  discountdays: string;
  @IsString()
  active: string;
  @IsString()
  discountontotal: string;
  @IsString()
  discountstarts: string;
  @IsString()
  discountends: string;
  @IsString()
  discounttimefrom: string;
  @IsString()
  discounttimeto: string;
  @IsString()
  discountminamount: string;
  @IsString()
  discountmaxamount: string;
  @IsString()
  discounthascoupon: string;
  @IsString()
  discountcategoryitemids: string;
  @IsString()
  discountmaxlimit: string;
}

class Tax {
  @IsString()
  taxid: string;
  @IsString()
  taxname: string;
  @IsString()
  tax: string;
  @IsString()
  taxtype: string;
  @IsString()
  tax_ordertype: string;
  @IsString()
  active: string;
  @IsString()
  tax_coreortotal: string;
  @IsString()
  tax_taxtype: string;
  @IsString()
  rank: string;
  @IsString()
  consider_in_core_amount: string;
  @IsString()
  description: string;
}
